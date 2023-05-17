import React from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const LayoutPage = ({ children }) => {

  const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
  }));
  const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  });
  const App = () => {
    const {
      token: { colorBgContainer },
    } = theme.useToken();
    return (
      <Layout>
        <Header
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div className="demo-logo" />
          <Menu mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
        </Header>
        <Layout>
          <Sider
            width={200}
            style={{
              background: colorBgContainer,
            }}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{
                height: '100%',
                borderRight: 0,
              }}
              items={items2}
            />
          </Sider>
          <Layout
            style={{
              padding: '0 24px 24px',
            }}
          >
            <Breadcrumb
              style={{
                margin: '16px 0',
              }}
            >
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: colorBgContainer,
              }}
            >
              Content
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ background: '#fff', padding: 10 }}>
        {/* Add your header content here */}
        Header
      </Header>
      <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
          {/* Add your sidebar content here */}
          Sidebar
        </Sider>
        <Layout>
          <Content style={{ margin: '16px' }}>
            {/* Add your main content here */}
            {children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            {/* Add your footer content here */}
            Footer
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default LayoutPage;
