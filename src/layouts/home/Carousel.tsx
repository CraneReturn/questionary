import { Carousel } from 'antd'
import React from 'react'
const CarouselPhoto = () => {
    return (
        <div className='CarouselPhoto'>
            <Carousel autoplay>
                <div>
                   <img src="http://wlgzs-office.oss-cn-beijing.aliyuncs.com/2023/12/10ad495a8aebbf43798fd78bd1a2bb3fb9wallhaven-gp1yx7_1920x1080.png" alt="" />
                </div>
                <div>
                    <img src="http://wlgzs-office.oss-cn-beijing.aliyuncs.com/2023/12/16306e0de9c4194ba68cd4d2c708da710c稿定AI绘图202307180847.png" alt="" />
                </div>
                <div>
                   <img src="http://wlgzs-office.oss-cn-beijing.aliyuncs.com/2023/12/175333a4bfcbe043b0aa3cc16bfa0e58ddwallhaven-exv5vw_1920x1080.png" alt="" />
                </div>
            </Carousel>
        </div>
    )
}
export default CarouselPhoto
