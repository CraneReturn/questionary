import { AppstoreOutlined, MailOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React from 'react';

type MenuItem = Required<MenuProps>['items'][number];
const items: MenuItem[] = [
    {
        key: '/admin/home',
        label: '首页',
        icon: <MailOutlined />,
    },
    {
        key: '/admin/userMange',
        label: '用户管理',
        icon: <UserOutlined />,
    },
        {
        key: '',
        label: '问卷管理',
        icon: <SettingOutlined />,
        children: [
            { key: '9', label: '问卷模板' },
            { key: '10', label: '问卷举报' },
        ],
    }
];
export default items