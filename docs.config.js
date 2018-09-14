module.exports = () => ({
  docs: {
    'front-end': {
      name: '前端',
      index: {
        HTML: 'front-end/HTML/index',
        CSS: 'front-end/CSS/index',
        javascript: 'front-end/javascript/index',
        node: 'front-end/node/index',
      },
      color: '',
    },
    'back-end': {
      name: '后端',
      index: {
        python: 'back-end/python/index',
      },
      color: '',
    },
    databases: {
      name: '数据库',
      index: {
        mysql: '',
      },
      color: '',
    },
    operations: {
      name: '运维',
      index: {
        docker: 'operations/docker/index',
      },
      color: '',
    },
    tool: {
      name: '工具',
      index: {
        git: '',
      },
      color: '',
    },
  },
  HTML: {
    categoryOrder: {
      element: 98,
      SVGElement: 99,
      MathMLElement: 100,
    },
    // https://www.w3.org/TR/2017/REC-html52-20171214/semantics.html 4.0-4.12
    typeOrder: {
      docment: 1,
      semantics: 2,
      'document-metadata': 3,
      sections: 4,
      'grouping-content': 5,
      'textlevel-semantics': 6,
      'sec-forms': 7,
      'tabular-data': 8,
      'semantics-embedded-content': 9,
      'semantics-scripting': 10,
      'interactive-elements': 11,
      edits: 12,
      obsolete: 13,
    },
  },
  CSS: {
    categoryOrder: {
      function: 97,
      'At-rules': 98,
      javascript: 99,
      property: 100,
    },
    typeOrder: {
      sizing: 1,
      box: 2,
      backgrounds: 3,
      fonts: 4,
      color: 5,
      text: 6,
      'text-decor': 7,
      break: 8,
      display: 9,
      inline: 10,
      CSS22: 11,
      flexbox: 12,
      grid: 13,
      position: 14,
      align: 15,
      casacde: 16,
      compositing: 17,
      content: 18,
      'device-adapt': 19,
      'fill-stroke': 20,
      'filter-effects': 21,
      images: 22,
      lists: 23,
      logical: 24,
      multicol: 25,
      overflow: 26,
      page: 27,
      'page-floats': 28,
      'round-display': 29,
      'scroll-snap': 30,
      shapes: 31,
      speech: 32,
      tables: 33,
      transforms: 34,
      transitions: 35,
      ui: 36,
      variables: 37,
      'will-change': 38,
      'writing-modes': 39
    },
  },
  javascript: {
    categoryOrder: {},
    typeOrder: {},
  },
  node: {
    categoryOrder: {},
    typeOrder: {},
  },
  python: {
    categoryOrder: {},
    typeOrder: {},
  },
  docker: {
    categoryOrder: {},
    typeOrder: {},
  },
  git: {
    categoryOrder: {},
    typeOrder: {},
  },
});