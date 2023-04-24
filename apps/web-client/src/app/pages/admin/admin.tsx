import { lazy } from 'react';
import {
  UsergroupAddOutlined,
  DashboardOutlined,
  TrophyOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import { Link, Route, Routes } from 'react-router-dom';

const { Content, Footer, Sider } = Layout;

const Dashboard = lazy(() => import('./dashboard/dashboard'));
const Users = lazy(() => import('./users/users'));
const Challenges = lazy(() => import('./challenges/challenges'));

const items: MenuProps['items'] = [
  {
    key: 'dashboard',
    icon: <DashboardOutlined />,
    label: <Link to="/admin">Dashboard</Link>,
  },
  {
    key: 'users',
    icon: <UsergroupAddOutlined />,
    label: <Link to="/admin/users">Users</Link>,
  },
  {
    key: 'challenges',
    icon: <TrophyOutlined />,
    label: <Link to="/admin/challenges">Challenges</Link>,
  },
];

export function Admin() {
  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <Menu theme="dark" mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <Routes>
            <Route path="/users/*" element={<Users />} />
            <Route path="/challenges/*" element={<Challenges />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </Content>
        <Footer style={{ textAlign: 'center' }}>PopIt | Admin</Footer>
      </Layout>
    </Layout>
  );
}

export default Admin;
