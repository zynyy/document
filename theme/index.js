const path = require('path');
const { homepage } = require('../package.json');

const editPage = homepage ? `${homepage}/edit/master` : '';
const layoutTmpl = './template/Layout/index';
const homeTmpl = './template/Home/index';
const contentTmpl = './template/Content/index';

const pickerGenerator = (module) => {
  const tester = new RegExp(`^${module}`);
  return (markdownData) => {
    const { filename } = markdownData.meta;
    if (tester.test(filename)
      && !/\/demo[s]?($|\/)/i.test(path.dirname(filename))) {
      return {
        meta: markdownData.meta,
      };
    }
    return false;
  };
};


module.exports = {
  lazyLoad: (nodePath, nodeValue) => {
    if (typeof nodeValue === 'string') {
      return true;
    }
    return nodePath.endsWith('/demo');
  },
  pick: {
    python: pickerGenerator('back-end/python') || '',
    docker: pickerGenerator('operations/docker') || '',
    HTML: pickerGenerator('front-end/HTML') || '',
    CSS: pickerGenerator('front-end/CSS') || '',
    javaScript: pickerGenerator('front-end/javaScript') || '',
  },
  plugins: [
    'bisheng-plugin-react?lang=jsx',
    'bisheng-plugin-anchor',
    'bisheng-plugin-division?h2=demo',
  ],
  routes: {
    path: '/',
    github: editPage || '',
    component: layoutTmpl,
    indexRoute: {
      component: homeTmpl,
    },
    childRoutes: [{
      path: 'front-end/:index/*',
      component: contentTmpl,
    }, {
      path: 'back-end/:index/*',
      component: contentTmpl,
    }, {
      path: 'databases/:index/*',
      component: contentTmpl,
    }, {
      path: 'operations/:index/*',
      component: contentTmpl,
    }, {
      path: 'tool/:index/*',
      component: contentTmpl,
    }],
  },
};
