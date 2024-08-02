import React, { useEffect } from 'react'
import CreatePhoto from '../../asset/image/create.png'
import FirstStep from '../../asset/image/firstStep.png'
const StepCreate = () => {
    return (
     
            <div className='staticRecords'>
                <div className='staticRecordsCenter fadeClass'>
                    <div className='recordsTextCreate'>
                        <div className='recordsTextCreateLeft fade1'>
                            <div className='recordsTextCreateMain'>
                                <img src={FirstStep} alt="" className='recordsTextCreateMainIcon' />
                                <strong>

                                    <span className='recordsTextCreateMaintitlespan'>
                                        第一步
                                    </span>

                                </strong>
                                <div className='recordsTextCreateMaintitle'>
                                    <p>
                                        创建问卷调查
                                    </p>
                                    <p>
                                        生成多种问卷类型
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='recordsTextCreateRight fade2'>
                            <div className='recordsTextCreatePhoto'>
                                <img src={CreatePhoto} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  
    )
}
export default StepCreate