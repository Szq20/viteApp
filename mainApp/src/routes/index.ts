/* eslint-disable */
import React from 'react';

// 数据集成
const Home = React.lazy(() => import('../pages/Home'));

// 数据源管理

const routes = [
    {
        path: '/platform/home',
        title: '首页',
        component: Home,
        hideSideNav: false
    }
];
export default routes;