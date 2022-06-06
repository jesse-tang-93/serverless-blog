import React from 'react';
import ReactDOM from 'react-dom/client';
// 自定义修改页面标题
import 'normalize.css'
// import 'antd/dist/antd.less'
import './admin.css'


import HomeManage from './container/HomeManage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomeManage/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// 浏览器数据统计。项目运行日志上报，此处也可以填写后端服务。
// reportWebVitals(console.log);
