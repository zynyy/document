const docModule = pathName => pathName.split('/').splice(0, 2).join('/');

module.exports = {
  docModule,
};
