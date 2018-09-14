
let definition = {};

function isExternal(url) {
  return /^https?:/.test(url);
}

function transformerDefinition(ast) {
  if (Array.isArray(ast)) {
    return ast.map(transformerDefinition);
  }

  if (ast && ast.constructor.name === 'Object') {
    if (ast.img) {
      const imgDefinition = definition[ast.img.identifier] || { url: '', title: '' };
      return ['img', {
        src: imgDefinition.url,
        title: imgDefinition.title,
        alt: ast.img.alt,
      }];
    }

    if (ast.link) {
      const linkDefinition = definition[ast.link.identifier] || { url: '', title: '' };
      const baseLinkAttribute = {
        title: linkDefinition.title,
        href: linkDefinition.url,
      };
      const addAttribute = isExternal(linkDefinition.url)
        ? {
          target: '_blank',
          rel: 'noopener noreferrer',
        }
        : '';
      return ['a', { ...baseLinkAttribute, ...addAttribute }].concat(transformerDefinition(ast.link.children));
    }
  }
  return ast;
}

function transformerAST(ast) {
  if (ast && !Array.isArray(ast)) return ast;

  let isExistFootnote = false;
  const footnote = ['ol', {
    class: 'footnote-list',
  }];

  const astNode = ast.filter((node) => {
    if (node.constructor.name === 'Object') {
      if (node.footnote) {
        isExistFootnote = true;
        footnote.push(node.footnote);
      } else {
        definition = { ...definition, ...node };
      }
      return false;
    }

    if ((Array.isArray(node) && node['0']) || typeof node === 'string') {
      return node;
    }
    return false;
  });

  return {
    footnote: isExistFootnote
      ? ['section', {
        class: 'footnotes',
      }].concat([footnote]).map(transformerDefinition)
      : '',
    content: astNode.map(transformerDefinition),
  };
}

function toUriPath(path) {
  return path.replace(/\\/g, '/');
}

module.exports = {
  transformerAST,
  isExternal,
  toUriPath,
};
