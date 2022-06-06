import React, { useState, useRef,} from 'react';
import { Layout, Menu } from 'antd';
import AreaList from "./component/AreaList"
import PageSetting from "./component/PageSetting"
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import './home.scss'

const { Header, Sider, Content } = Layout;

const HomeManage = () => {

  const [collapsed, setCollapsed] = useState(false);


  
  const pageSettingRef = useRef()

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: '首页内容管理',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: '返回用户页面',
              onClick:()=>{
                window.location.href = "/"
              }
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 800,
          }}
        >
          <PageSetting ref={pageSettingRef}/>
          <AreaList/>
         
        </Content>
      </Layout>
    </Layout>
  );
};

export default HomeManage;
