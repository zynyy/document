import collect from 'bisheng/collect';

import MainContent from './Main';


export default collect(async (nextProps) => {
  const { location: { pathname }, params, themeConfig } = nextProps;

  const pageDataPath = pathname.split('/');
  const pageData = nextProps.utils.get(nextProps.data, [...pageDataPath, pageDataPath.pop() ? '' : 'index']);
  
  if (!pageData) {
    console.error(`${pathname} 数据不存在`);
    // eslint-disable-next-line no-throw-literal
    throw 404;
  }

  if (!themeConfig[params.index]) {
    console.error(`${params.index} 不存在请在docs.config.js进行配置`);
    // eslint-disable-next-line no-throw-literal
    throw 404;
  }
  // exitjs.get
  const demosFetcher = nextProps.utils.get(nextProps.data, [...pageDataPath, 'demo']);

  const pageDataPromise = typeof pageData === 'function' ? pageData() : '';
  const localizedPageData = await pageDataPromise;

  if (!localizedPageData.meta) {
    console.error(`${pathname}`);
    process.exit(1);
  }

  if (demosFetcher) {
    const demos = await demosFetcher();
    return { localizedPageData, demos };
  }

  return { localizedPageData };
})(MainContent);
