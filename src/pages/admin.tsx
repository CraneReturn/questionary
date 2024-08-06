import React from 'react'
import AdminLeftNail from '../layouts/admin/leftNail'
import '../layouts/style/admin/admin.scss'
import TopNailAdmin from '../layouts/admin/topNailAdmin'
const AdminHome = () => {
  return (
    <div className='adminHomeShow'>
      <div className='adminHomeShowleft'>
        <AdminLeftNail />
      </div>
      <div className='adminHomeShowRight'>
        <TopNailAdmin />
      </div>
    </div>
  )
}
export default AdminHome
