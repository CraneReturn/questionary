import { CaretDownOutlined } from '@ant-design/icons'
import headIcon from '../../asset/image/logo.png'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import items from '../../router/exportindex';

type MenuItem = Required<MenuProps>['items'][number];
const AdminLeftNail = (() => {
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