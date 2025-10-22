import React from 'react'
import Bai1 from './pages/Bai1/Bai1'
import Bai2 from './pages/Bai2/Bai2'
import Bai3 from './pages/Bai3/Bai3'
import SideBar from './component/SideBar'
import SinhvienDetail from './pages/Bai2/SinhVienDetail'
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <div>
        <SideBar />
      </div>
      <Routes>
        <Route path='/Bai1' element={<Bai1 />} />
         <Route path='/Bai2' element={<Bai2 />} />
         <Route path='/Bai3' element={<Bai3 />} />
         <Route path="/Bai2/:id" element={<SinhvienDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App