import React from 'react'
import { Anchor } from 'antd';
import '../style/carousel.scss'
const StaticTeps = () => {
    return (
        <div className='staticRecords staticStep' id='stepCreate'>
            <div className='staticStepConten'>

            </div>
            <div className='staticRecordsCenter'>
                <div className='recordsText'>
                    <p>
                        <strong>
                            轻松创建问卷,只需四步
                        </strong>
                    </p>
                </div>
                <div className='achordButton'>
                    <button>
                      <a href="#stepCreate">
                      创建问卷
                      </a>
                    </button>
                    <button>
                        <a href="#stepComponent">
                        集成合作
                      </a>
                    </button>
                    
                    <button>
                        <a href="#stepQuestion">
                        派发问卷
                      </a>
                    </button>
                    <button>
                        <a href="#stepgetData">
                        收获数据
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default StaticTeps
