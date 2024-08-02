import React from 'react'
import CreatePhoto from '../../asset/image/create.png'
import forthStep from '../../asset/image/forthStep.png'
const StepData = () => {
    return (
        <div className='staticRecords staticStepShow' id='stepComponent'>
            <div className='staticStepConten'>

            </div>
            <div className='staticRecordsCenter fadeClass'>
                <div className='recordsTextCreate'>
                    <div className='recordsTextCreateLeft fade2'>
                    <div className='recordsTextCreatePhoto'>
                            <img src={CreatePhoto} alt="" />
                        </div>
                    </div>
                    <div className='recordsTextCreateRight fade1'>
                        <div className='recordsTextCreateMain'>
                            <img src={forthStep} alt="" className='recordsTextCreateMainIcon forthStepPhoto' />
                            <strong>

                                <span className='recordsTextCreateMaintitlespan'>
                                    第四步
                                </span>
                            </strong>
                            <div className='recordsTextCreateMaintitle'>
                                <p>
                                  得到问卷调查数据
                                </p>
                                <p>
                               得到数据支持结果

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default StepData
