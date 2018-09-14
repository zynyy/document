const getCSSModulesInformation = (module) => {
 const CSSModules = [{
    module: 'selectors',
    css: true,
    version: {
      3: {
        time: '2018年9月11日',
        state: 'REC',
      },
      4: {
        time: '2018年2月2日',
        state: 'WD',
      },
    },
  }, {
    module: 'box',
    version: {
      3: {
        time: '2018年8月9日',
        state: 'WD',
      },
    },
  }, {
    module: 'backgrounds',
    version: {
      3: {
        time: '2018年8月9日',
        state: 'CR',
      },
    },
  }, {
    module: 'values',
    version: {
      3: {
        time: '2018年8月9日',
        state: 'CR',
      },
    },
  }, {
    module: 'color',
    version: {
      3: {
        time: '2018年6月19日',
        state: 'CR',
      },
    },
  }, {
    module: 'fonts',
    version: {
      3: {
        time: '2018年8月14日',
        state: 'REC',
      },
    },
  }, {
    module: 'text',
    version: {
      3: {
        time: '2017年8月22日',
        state: 'CR',
      },
    },
  }, {
    module: 'scroll-snap',
    version: {
      3: {
        time: '2018年8月14日',
        state: 'CR',
      },
    },
  }, {
    module: 'writing-modes',
    version: {
      3: {
        time: '2018年5月24日',
        state: 'CR',
      },
    },
  }, {
    module: 'multicol',
    version: {
      1: {
        time: '2018年5月28日',
        state: 'WD',
      },
    },
  }, {
    module: 'counter-styles',
    version: {
      3: {
        time: '2017年12月14日',
        state: 'CR',
      },
    },
  }, {
    module: 'content',
    version: {
      3: {
        time: '2016年6月2日',
        state: 'WD',
      },
    },
  }, {
    module: 'namespaces',
    version: {
      3: {
        time: '2011年9月29日',
        state: 'REC',
      },
    },
  }, {
    module: 'speech',
    time: '2018年6月5日',
    state: 'Note',
  }, {
    module: 'flexbox',
    version: {
      1: {
        time: '2017年10月19日',
        state: 'CR',
      },
    },
  }, {
    module: 'text-decor',
    version: {
      3: {
        time: '2018年7月3日',
        state: 'CR',
      },
    },
  }, {
    module: 'shapes',
    version: {
      1: {
        time: '2014年3月20日',
        state: 'CR',
      },
    },
  }, {
    module: 'masking',
    version: {
      1: {
        time: '2014年8月26日',
        state: 'CR',
      },
    },
  }, {
    module: 'break',
    version: {
      3: {
        time: '2017年2月9日',
        state: 'CR',
      },
    },
  }, {
    module: 'compositing',
    version: {
      1: {
        time: '2015年1月13日',
        state: 'CR',
      },
    },
  }, {
    module: 'grid',
    version: {
      1: {
        time: '2017年12月14日',
        state: 'CR',
      },
    },
  }, {
    module: 'display',
    version: {
      1: {
        time: '2018年8月28日',
        state: 'CR',
      },
    },
  }, {
    module: 'will-change',
    version: {
      1: {
        time: '2015年12月3日',
        state: 'CR',
      },
    },
  }, {
    module: 'contain',
    version: {
      1: {
        time: '2018年5月24日',
        state: 'CR',
      },
    },
  }, {
    module: 'animations',
    version: {
      1: {
        time: '2017年11月30日',
        state: 'WD',
      },
    },
  }, {
    module: 'cssom-view',
    version: {
      1: {
        time: '2016年3月17日',
        state: 'wd',
      },
    },
  }, {
    module: 'transitions',
    version: {
      2: {
        time: '2017年11月30日',
        state: 'WD',
      },
    },
  }, {
    module: 'transforms',
    version: {
      1: {
        time: '2017年11月30日',
        state: 'WD',
      },
    },
  }, {
    module: 'align',
    version: {
      3: {
        time: '2018年8月30日',
        state: 'WD',
      },
    },
  }, {
    module: 'sizing',
    version: {
      3: {
        time: '2018年3月4日',
        state: 'CR',
      },
    },
  }, {
    module: 'ruby',
    version: {
      1: {
        time: '2014年8月5日',
        state: 'WD',
      },
    },
  }, {
    module: 'overflow',
    version: {
      3: {
        time: '2018年7月31日',
        state: 'DR',
      },
    },
  }, {
    module: 'pseudo',
    version: {
      4: {
        time: '2016年6月7日',
        state: 'DR',
      },
    },
  }, {
    module: 'template',
    version: {
      3: {
        time: '2015年3月26日',
        state: 'CR',
      },
    },
  }, {
    module: 'template',
    version: {
      3: {
        time: '2015年3月26日',
        state: 'CR',
      },
    },
  }, {
    module: 'lists',
    version: {
      3: {
        time: '2014年3月20日',
        state: 'CR',
      },
    },
  }, {
    module: 'regions',
    version: {
      3: {
        time: '2014年10月9日',
        state: 'CR',
      },
    },
  }, {
    module: 'motion',
    version: {
      1: {
        time: '2017年7月11日',
        state: 'CR',
      },
    },
  }, {
    module: 'round-display',
    version: {
      1: {
        time: '2016年12月22日',
        state: 'CR',
      },
    },
  }, {
    module: 'filter-effects',
    version: {
      1: {
        time: '2015年3月26日',
        state: 'CR',
      },
    },
  }, {
    module: 'ui',
    version: {
      4: {
        time: '2017年12月22日',
        state: 'CR',
      },
    },
  }, {
    module: 'page-floats',
    version: {
      3: {
        time: '2015年9月15日',
        state: 'CR',
      },
    },
  }, {
    module: 'cascade',
    version: {
      3: {
        time: '2018年8月28日',
        state: 'CR',
      },
    },
  }, {
    module: 'position',
    version: {
      3: {
        time: '2016年5月17日',
        state: 'WD',
      },
    },
  }, {
    module: 'tables',
    version: {
      3: {
        time: '2017年3月7日',
        state: 'WD',
      },
    },
  }];
  return CSSModules.find(item => item.module === module);
};

module.exports = {
  getCSSModulesInformation,
};
