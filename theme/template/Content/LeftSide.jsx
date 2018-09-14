import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'bisheng/router';

import { Layout, Menu, Icon } from 'antd';

import { docModule } from '../utils';

const { Sider } = Layout;
const { SubMenu } = Menu;

const sortFn = (a, b) => (a.order || 100) - (b.order || 100);
const sortMenuItems = (moduleData, conf) => {
  const { categoryOrder, typeOrder } = conf;
  const menuItems = [];
  const menuMeta = moduleData.map(item => item.meta);
  menuMeta.sort(sortFn).forEach((meta) => {
    if (!meta.category || (!meta.type && !meta.category)) {
      menuItems.push(meta);
    } else {
      const { category } = meta;
      let group = menuItems.filter(i => i.title === category)[0];
      if (!group) {
        group = {
          title: category,
          type: 'category',
          children: [],
          order: categoryOrder[category],
        };
        menuItems.push(group);
      }

      if (meta.type) {
        let type = group.children.filter(i => i.title === meta.type)[0];
        if (!type && category) {
          type = {
            type: 'type',
            title: meta.type,
            children: [],
            order: typeOrder[meta.type],
          };
          group.children.push(type);
        }
        type.children.push(meta);
      } else {
        group.children.push(meta);
      }
    }
  });
  return menuItems.map((item) => {
    if (item.children) {
      // eslint-disable-next-line no-param-reassign
      item.children = item.children.sort(sortFn);
    }
    return item;
  }).sort(sortFn);
};

// 多维数组转一维
const flattenMenu = (menu) => {
  if (Array.isArray(menu)) {
    return menu.reduce((arr, item) => arr.concat(flattenMenu(item)), []);
  }

  return menu.children ? flattenMenu(menu.children) : menu;
};

export default class LeftSide extends React.Component {
  static generateMenuItem(item) {
    const url = item.filename.replace('.md', '');
    const { title, disabled } = item;
    const child = !item.link ? (
      <Link
        to={url}
        disabled={disabled}
      >
        {title ? `${title}`.replace('At-', '@').split(' ')[0] : '暂无标题'}
      </Link>) : (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          disabled={disabled}
          className="menu-item-link-outside"
        >
          {`${title}`.replace('At-', '@') || '暂无'}
          <Icon type="export" />
        </a>);
    return (
      <Menu.Item key={url} disabled={disabled}>
        {child}
      </Menu.Item>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      openKeys: Object.keys(props.conf.categoryOrder),
      menuItems: sortMenuItems(props.moduleData, props.conf),
      menuItemsList: '',
      module: docModule(props.active), // eslint-disable-line react/no-unused-state
    };
  }

  static getDerivedStateFromProps(nextProps, state) {
    const nextModule = docModule(nextProps.active);
    const { module, menuItems, menuItemsList } = state;
    if (nextModule !== module) {
      const items = sortMenuItems(nextProps.moduleData, nextProps.conf);
      return {
        menuItems: items,
        module: nextModule,
        menuItemsList: flattenMenu(items),
      };
    }
    if (nextModule === module && !menuItemsList) {
      return {
        menuItemsList: flattenMenu(menuItems),
      };
    }
    return null;
  }

  componentDidUpdate() {
    const { active, footerNav } = this.props;
    footerNav(this.getFooterNav(active));
  }

  getMenuItems() {
    const { menuItems } = this.state;
    return menuItems.map((menuItem) => {
      if (menuItem.children) {
        return (
          <SubMenu
            key={menuItem.title}
            title={(
              <h4>
                {`${menuItem.title}`.replace('At-', '@') || '文件缺少标题'}
              </h4>
            )}
          >
            {
              menuItem.children.map((child) => {
                if (child.type === 'type') {
                  return (
                    <Menu.ItemGroup title={child.title} key={child.title}>
                      {
                        child.children.sort(sortFn)
                          .map(leaf => this.constructor.generateMenuItem(leaf))
                      }
                    </Menu.ItemGroup>
                  );
                }
                return this.constructor.generateMenuItem(child);
              })
            }
          </SubMenu>
        );
      }
      return this.constructor.generateMenuItem(menuItem);
    });
  }

  getFooterNav(activeMenuItem) {
    const { menuItemsList } = this.state;
    let activeMenuItemIndex = -1;
    if (menuItemsList) {
      menuItemsList.forEach((menuItem, index) => {
        if (menuItem && menuItem.filename === `${activeMenuItem}.md`) {
          activeMenuItemIndex = index;
        }
      });
      const prev = menuItemsList[activeMenuItemIndex - 1];
      const next = menuItemsList[activeMenuItemIndex + 1];
      return { prev, next };
    }
    return '';
  }

  handleMenuOpenChange = (openKeys) => {
    this.setState({ openKeys });
  };

  render() {
    const { active } = this.props;
    const menuItems = this.getMenuItems();
    const { openKeys } = this.state;
    return (
      <aside id="sidebar-nav">
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'sticky',
            left: 0,
            top: 0,
          }}
        >
          <Menu
            mode="inline"
            selectedKeys={[active]}
            openKeys={openKeys}
            style={{ height: '100%' }}
            onOpenChange={this.handleMenuOpenChange}
          >
            {menuItems}
          </Menu>
        </Sider>
      </aside>
    );
  }
}

LeftSide.propTypes = {
  active: PropTypes.string.isRequired,
  footerNav: PropTypes.func.isRequired,
  moduleData: PropTypes.arrayOf(PropTypes.object).isRequired,
  conf: PropTypes.shape({
    categoryOrder: PropTypes.object,
    typeOrder: PropTypes.object,
  }).isRequired,
};
