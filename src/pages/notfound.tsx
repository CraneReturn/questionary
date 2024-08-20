import notfound from '@/asset/image/404.png'

import '@/layouts/style/404/notfound.scss'
import { Navigate, NavLink } from 'react-router-dom'
const NotFound = () => {
    return (
        <div className="notFoundMain">
            <div className="notFoundMainCenter">
                <img src={notfound} alt="" />
                <div className='returnButton'>
                    <NavLink to='/'>
                        <p>
                            返回主页
                        </p>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
export default NotFound