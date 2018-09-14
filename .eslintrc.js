module.exports = {
  "extends": "airbnb",
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  parser: 'babel-eslint',
  plugins: [
    'markdown',
    'react',
    'babel',
  ],
  rules: {
    'no-console': [2, { allow: ["warn", "error"] }],
    'no-underscore-dangle': [2, { "allow": ["__content"] }],
    'react/no-danger': 0,
    // babel-eslint range bug disable rules
    indent: 0,
    'template-curly-spacing': 0,
  }
};

// 0 => "0ff" 关闭
// 1 => "warn" 警告
// 2 => "error" 错误且退出执行代码
