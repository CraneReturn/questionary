import React from 'react'
import '../style/carousel.scss'
const StaticRecord =()=> {
  return (
   <div className='staticRecords'>
    <div className='staticRecordsCenter fadeClass'>
        <div className='recordsText'>
            <p>
            <strong>
                累计目前
                <span className='paddingTextRecords'>
                    薯条问卷
                </span>
                已创建
                <span className='paddingTextRecords recordCenter'>
                    365份问卷
                </span>
                为<span className='paddingTextRecords recordCenter'>
                    365用户
                </span>
                服务
            </strong>
            </p>
            
        </div>
    </div>
   </div>
  )
}
export default StaticRecord
