
const JsonML = require('jsonml.js/lib/dom');
const { isExternal } = require('../utils');

let isTHead = false;
let index = -1;
let trAlign = [];

function transformTHead(node) {
  // eslint-disable-next-line no-use-before-define
  const transformedNode = transformer(node);
  isTHead = false;
  return transformedNode;
}

function transformer(node) {
  if (!node) return false;

  if (Array.isArray(node)) {
    return node.map(transformer);
  }

  switch (node.type) {
    case 'root': {
      return ['article'].concat(transformer(node.children));
    }

    case 'text': {
      return node.value;
    }

    // #
    case 'heading': {
      return [`h${node.depth}`].concat(transformer(node.children));
    }

    case 'paragraph': {
      return ['p'].concat(transformer(node.children));
    }

    // * 1. + -
    case 'list': {
      return [node.ordered ? 'ol' : 'ul'].concat(transformer(node.children));
    }

    case 'listItem': {
      return ['li'].concat(transformer(node.children));
    }

    // | |
    // | -- |
    case 'table': {
      isTHead = true;
      trAlign = node.align;
      return [
        'table',
        ['thead', transformTHead(node.children[0])],
        ['tbody'].concat(transformer(node.children.slice(1))),
      ];
    }

    case 'tableRow': {
      index = -1;
      return ['tr'].concat(transformer(node.children));
    }

    case 'tableCell': {
      index += 1;

      return trAlign[index]
        ? [isTHead ? 'th' : 'td', {
          style: {
            textAlign: trAlign[index],
          },
        }].concat(transformer(node.children))
        : [isTHead ? 'th' : 'td'].concat(transformer(node.children));
    }

    // [](url)
    case 'link': {
      const baseLinkAttribute = {
        title: node.title,
        href: node.url,
      };
      const addAttribute = isExternal(node.url)
        ? {
          target: '_blank',
          rel: 'noopener noreferrer',
        }
        : {};
      return ['a', { ...baseLinkAttribute, ...addAttribute }].concat(transformer(node.children));
    }

    // [quote name]
    case 'linkReference': {
      return {
        link: {
          identifier: node.identifier,
          children: transformer(node.children),
          type: node.referenceType,
        },
      };
    }

    // ![](url)
    case 'image': {
      return ['img', {
        title: node.title,
        src: node.url,
        alt: node.alt,
      }];
    }

    // ![quote name]
    case 'imageReference': {
      return {
        img: {
          identifier: node.identifier,
          alt: node.alt,
          type: node.referenceType,
        },
      };
    }

    // [quote name]:
    case 'definition': {
      return {
        [node.identifier]: {
          title: node.title,
          url: node.url,
        },
      };
    }

    // [^1]
    case 'footnoteReference': {
      return ['sup',
        ['a', {
          href: `#fn${node.identifier}`,
          id: `fnref${node.identifier}`,
          class: 'footnote',
        }, `[${node.identifier}]`],
      ];
    }

    // [^1]:
    case 'footnoteDefinition': {
      const footnoteChildren = transformer(node.children)['0'].concat([
        ['a', {
          href: `#fnref${node.identifier}`,
          id: `fn${node.identifier}`,
          class: 'footnote-backref',
        }, '↩︎'],
      ]);
      return {
        footnote: ['li', {
          class: 'footnote-item',
        }].concat([footnoteChildren]),
      };
    }

    // ```lang
    //  code
    // ```
    case 'code': {
      return ['pre', { lang: node.lang || 'en' }, ['code', node.value]];
    }

    // `code`
    case 'inlineCode': {
      return ['code', node.value];
    }

    // **加粗** __加粗__
    case 'strong': {
      return ['strong'].concat(transformer(node.children));
    }

    // *斜体* _斜体_
    case 'emphasis': {
      return ['em'].concat(transformer(node.children));
    }

    // ~~删除~~
    case 'delete': {
      return ['del'].concat(transformer(node.children));
    }

    // >
    case 'blockquote': {
      return ['blockquote'].concat(transformer(node.children));
    }

    // ___ *** - - -
    case 'thematicBreak': {
      return ['hr'];
    }

    // test \
    // demo
    case 'break': {
      return ['br'];
    }

    // html 标签
    case 'html': {
      return JsonML.fromHTMLText(node.value);
    }

    default: {
      return node;
    }
  }
}

module.exports = transformer;

// https://github.com/remarkjs/remark/tree/master/packages/remark-parse/lib/tokenize
// https://github.com/remarkjs/remark/tree/master/packages/remark-parse/lib/locate
//
