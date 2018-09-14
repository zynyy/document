const markTwain = require('./MT');
const { toUriPath } = require('./utils');

module.exports = (filename, fileContent) => {
  const markdown = markTwain(fileContent);
  markdown.meta.filename = toUriPath(filename);
  return markdown;
};
