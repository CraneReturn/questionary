import { CaretDownOutlined } from '@ant-design/icons'
import headIcon from '../../asset/image/logo.png'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];
const AdminLeftNail = (() => {
    const items: MenuItem[] = [
        {
            key: 'sub1',
            label: 'Navigation One',
            icon: <MailOutlined />,
            children: [
                {
                    key: 'g1',
                    label: 'Item 1',
                    type: 'group',
                    children: [
                        { key: '1', label: 'Option 1' },
                        { key: '2', label: 'Option 2' },
                    ],
                },
                {
                    key: 'g2',
                    label: 'Item 2',
                    type: 'group',
                    children: [
                        { key: '3', label: 'Option 3' },
                        { key: '4', label: 'Option 4' },
                    ],
                },
            ],
        },
        {
            key: 'sub2',
            label: 'Navigation Two',
            icon: <AppstoreOutlined />,
            children: [
                { key: '5', label: 'Option 5' },
                { key: '6', label: 'Option 6' },
                {
                    key: 'sub3',
                    label: 'Submenu',
                    children: [
                        { key: '7', label: 'Option 7' },
                        { key: '8', label: 'Option 8' },
                    ],
                },
            ],
        },
        {
            type: 'divider',
        },
        {
            key: 'sub4',
            label: 'Navigation Three',
            icon: <SettingOutlined />,
            children: [
                { key: '9', label: 'Option 9' },
                { key: '10', label: 'Option 10' },
                { key: '11', label: 'Option 11' },
                { key: '12', label: 'Option 12' },
            ],
        },
        {
            key: 'grp',
            label: 'Group',
            type: 'group',
            children: [
                { key: '13', label: 'Option 13' },
                { key: '14', label: 'Option 14' },
            ],
        },
    ];
    return (
        <div className="leftNailAdmin">
            <div className="nailTopAdminTitle">
                <div className="nailTopAdminTitlePhoto">
                    <img src={headIcon} alt="" />
                    <span>
                        <strong>
                            后台管理
                        </strong>
                    </span>
                </div>
            </div>
            <div className='nailIconMenu'>
                {/* <div className='nailIconMenuList'>
                    qqq
                </div>
                <div className='nailIconmenuTitle'>
                    1111
                </div> */}
                <Menu
                
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    items={items}
                />
            </div>
        </div>
    )
})
export default AdminLeftNail