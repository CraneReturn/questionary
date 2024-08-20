import './App.css';
import 'antd/dist/reset.css'
import '../src/variable.scss'
import router from './router';
import { RouterProvider } from "react-router-dom"
import React from 'react';
function App() {
  return (
   <RouterProvider router={router} />
  );
}

export default App;
