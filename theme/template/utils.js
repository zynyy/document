const docModule = pathName => pathName.split('/').splice(0, 2).join('/');

const uriPath = filename => filename.replace('.md', '');

module.exports = {
  docModule,
  uriPath,
};
