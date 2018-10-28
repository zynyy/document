const docModule = pathName => pathName.split('/').splice(0, 2).join('/');

const uriPath = filename => filename.replace('.md', '');

const getElementHeight = (selectors: string) => {
  const ele = document.querySelector(selectors);
  return window.getComputedStyle(ele).height.replace('px', '');
};

module.exports = {
  docModule,
  uriPath,
  getElementHeight,
};
