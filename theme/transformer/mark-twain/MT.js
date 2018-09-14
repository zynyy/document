
const remark = require('remark');
const YFM = require('yaml-front-matter');

const transformer = require('./lib/transformer');
const parset = require('./preset');
const { transformerAST } = require('./utils');


module.exports = function MT(markdown) {
  const ret = {};

  const raw = YFM.loadFront(markdown);
  // https://github.com/unifiedjs/unified#example-9
  const mdast = remark().use(parset).parse(raw.__content);
  const ast = transformer(mdast);
  const { footnote, content } = transformerAST(ast);

  ret.content = content;
  ret.footnote = footnote;
  // Get meta data
  delete raw.__content;
  ret.meta = raw;

  return ret;
};
