const path = require('path');
// const OfflinePlugin = require('offline-plugin');

const { injectBabelPlugin, injectBabelLess } = require('./utils/webpack.rewrite');

const themeValue = require('./package.json').theme;
const { homepage } = require('./package.json');
const themeConfig = require('./docs.config')();

const markdownTransformer = path.join(__dirname, './theme/transformer/mark-twain/markdown');

const rootPATH = process.env.PLATFORM === 'github' ? `/${homepage.split('/').pop()}/` : '/';

module.exports = {
  port: 80,
  root: rootPATH,
  source: {
    'front-end': './front-end',
    'back-end': './back-end',
    databases: './databases',
    operations: './operations',
    tool: './tool',
  },
  theme: './theme',
  htmlTemplate: './theme/static/template.html',
  themeConfig,
  webpackConfig(config) {
    config.plugins.push(
      // new OfflinePlugin(),
    );
    /* eslint-disable-next-line */
    config.resolve.alias = {
      component: path.join(process.cwd(), 'theme/template/Component'),
      demo: path.join(process.cwd(), 'theme/template/Demo'),
    };

    injectBabelPlugin(
      ['import', [{
        libraryName: 'antd',
        style: true,
      }],
      ], config,
    );

    injectBabelLess(themeValue, config);

    // console.warn(config.module.rules['11']);

    return config;
  },
  transformers: [{
    test: /\.md$/,
    use: markdownTransformer,
  }],
};
