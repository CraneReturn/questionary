import React from 'react'
import AdminLeftNail from '../layouts/admin/leftNail'
import '../layouts/style/admin/admin.scss'
import TopNailAdmin from '../layouts/admin/topNailAdmin'
import { Outlet } from 'react-router-dom'
const AdminHome = () => {

  return (
    <div>
      <div className='adminHomeShow'>
        <div className='adminHomeShowleft'>
          <AdminLeftNail />
        </div>
        <div className='adminHomeShowRight'>
          <TopNailAdmin />
          <Outlet/>
        </div>

      </div>
    </div>
  )
}
export default AdminHome
