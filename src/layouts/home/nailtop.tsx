import React from 'react'
import '../style/Nailtop.scss'
import { Popover, Button } from 'antd';
import Logo from '../../asset/image/logo.png'
const NailTop = () => {
    const contenType = (
        <div>
            <div className='proverShow'>
                <p className='proverShowspan'>问卷调查</p>

            </div>
            <div className='proverShow'>
                <p className='proverShowspan'>在线考试</p>
            </div>
            <div className='proverShow'>
                <p className='proverShowspan'>模板题库</p>
            </div>
        </div>

    )
    const contenTogether = (
        <div>
            <div className='proverShow'>
                <p className='proverShowspan'>未来软件工作室</p>
            </div>
        </div>

    )
    return (
       <div className='fiexedNailtop'>
         <div className='nailtop' id='topNail'>
            <div className='logofont'>
                <img src={Logo} alt="" />
                <span className='logoName'>
                    <strong>薯条问卷</strong>
                </span>
            </div>
            <div className='nailCenter'>
                <ul>
                    <li>
                        <Popover placement="bottom" title='问卷类型' content={contenType} trigger="hover">
                            问卷类型
                        </Popover>
                    </li>
                    <li>
                        <Popover placement="bottom" title='企业合作' content={contenTogether} trigger="hover">
                           企业合作
                        </Popover>
                    </li>
                </ul>
            </div>
            <div className='buttonEnter'>
                <button>
                    进入工作台
                </button>
            </div>
        </div>
       </div>
    )
}
export default NailTop
