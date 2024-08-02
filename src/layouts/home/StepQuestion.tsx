import React from 'react'
import CreatePhoto from '../../asset/image/create.png'
import thirdStep from '../../asset/image/thirdStep.png'
const StepQuestion=()=> {
  return (
    <div className='staticRecords'>
    <div className='staticRecordsCenter fadeClass'>
        <div className='recordsTextCreate'>
            <div className='recordsTextCreateLeft fade1'>
                <div className='recordsTextCreateMain'>
                    <img src={thirdStep} alt="" className='recordsTextCreateMainIcon' />
                    <strong>

                        <span className='recordsTextCreateMaintitlespan'>
                            第三步
                        </span>

                    </strong>
                    <div className='recordsTextCreateMaintitle'>
                        <p>
                           通过二维码派发问卷
                        </p>
                        <p>
                           通过链接派发问卷
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
export default StepQuestion
