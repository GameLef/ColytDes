import { Link, Outlet } from 'umi';
import styles from './index.scss';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

export default function Layout() {
  return (
    <ConfigProvider locale={zhCN}>
      <Outlet />
    </ConfigProvider>
  );
}
