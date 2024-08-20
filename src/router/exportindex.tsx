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
    // {
    //     type: 'divider',
    // },
    // {
    //     key: 'sub4',
    //     label: 'Navigation Three',
    //     icon: <SettingOutlined />,
    //     children: [
    //         { key: '9', label: 'Option 9' },
    //         { key: '10', label: 'Option 10' },
    //         { key: '11', label: 'Option 11' },
    //         { key: '12', label: 'Option 12' },
    //     ],
    // },
    // {
    //     key: 'grp',
    //     label: 'Group',
    //     type: 'group',
    //     children: [
    //         { key: '13', label: 'Option 13' },
    //         { key: '14', label: 'Option 14' },
    //     ],
    // },
];
export default items