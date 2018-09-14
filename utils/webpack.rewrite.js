
const { resolve } = require('path');

const loaderNameMatches = rule => rule && rule.loader && typeof rule.loader === 'string' && rule.loader === 'babel-loader';

const getLoader = (rules, matcher) => {
  let loader;

  rules.some((rule) => {
    loader = matcher(rule)
      ? rule : getLoader(rule.use || (Array.isArray(rule.loader) && rule.loader) || [], matcher);
    return loader;
  });

  return loader;
};


const getBabelLoader = rules => getLoader(rules, loaderNameMatches);

const injectBabelPlugin = (pluginName, config) => {
  const loader = getBabelLoader(config.module.rules);
  if (!loader) {
    console.warn('babel-loader not found');
    return config;
  }
  // Older versions of webpack have `plugins` on `loader.query` instead of `loader.options`.
  const options = loader.options || loader.query;
  options.plugins = [pluginName].concat(options.plugins || []);


  return config;
};


const babelTestMatch = rule => rule && rule.use
  && typeof rule.test === 'function'
  && (
    (process.env.NODE_ENV === 'production' && rule.use.pop().loader === 'less-loader')
    || rule.use.indexOf('less-loader') !== -1
  );

const getTetsLess = (rules, matcher) => {
  let less;

  rules.some((rule) => {
    less = matcher(rule) ? rule : false;
    return less;
  });

  return less;
};

const getBabelTestLess = rules => getTetsLess(rules, babelTestMatch);


const injectBabelLess = (theme, config) => {
  const less = getBabelTestLess(config.module.rules);
  let themeValue = '';
  if (!less) {
    console.warn('test: /.less$/ not found');
    return config;
  }

  if (theme && typeof theme === 'string') {
    let themePath = theme;

    if (themePath.charAt(0) === '.') {
      themePath = resolve(process.cwd(), themePath);
    }

    // eslint-disable-next-line import/no-dynamic-require, global-require
    const getThemeConfig = require(themePath);

    themeValue = getThemeConfig();
  } else if (theme && typeof theme === 'object') {
    themeValue = theme;
  }

  const lessLoader = {
    loader: 'less-loader',
    options: {
      modifyVars: themeValue,
    },
  };

  less.use.splice(less.use.indexOf('less-loader'), 1);

  less.use = less.use.concat(lessLoader);

  return config;
};


module.exports = {
  injectBabelPlugin,
  injectBabelLess,
};

// 该代码来自<https://github.com/timarney/react-app-rewired/blob/master/packages/react-app-rewired/index.js>
