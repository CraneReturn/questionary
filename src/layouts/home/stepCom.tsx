import React from 'react'
import CreatePhoto from '../../asset/image/create.png'
import SencodStep from '../../asset/image/secondstep.png'
const StepCom = () => {
    return (
        <div className='staticRecords staticStepShow fadeClass' id='stepComponent'>
            <div className='staticStepConten'>

            </div>
            <div className='staticRecordsCenter'>
                <div className='recordsTextCreate fade1'>
                    <div className='recordsTextCreateLeft fade2'>
                    <div className='recordsTextCreatePhoto'>
                            <img src={CreatePhoto} alt="" />
                        </div>
                    </div>
                    <div className='recordsTextCreateRight fade3'>
                        <div className='recordsTextCreateMain'>
                            <img src={SencodStep} alt="" className='recordsTextCreateMainIcon forthStepPhoto' />
                            <strong>

                                <span className='recordsTextCreateMaintitlespan'>
                                    第二步
                                </span>

                            </strong>
                            <div className='recordsTextCreateMaintitle'>
                                <p>
                                    创建多人在线办公
                                </p>
                                <p>
                                 合作生成满意的问卷
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default StepCom
