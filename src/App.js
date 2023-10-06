import './App.css';
import './bootstrap-5.2.3-dist/css/bootstrap-grid.min.css';
import './bootstrap-5.2.3-dist/fontawesome/css/all.min.css';
import './bootstrap-5.2.3-dist/css/bootstrap.min.css';
import './bootstrap-5.2.3-dist/js/bootstrap.min.js';
import './bootstrap-5.2.3-dist/sweetalert2/sweetalert2.min.css';
import './bootstrap-5.2.3-dist/sweetalert2/sweetalert2.all.min.js';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Chitiet from './components/DOAN/Chitiet';
import Trangchinh from './components/DOAN/Trangchinh';
import GioHang from './components/DOAN/GioHang/GioHang';
import ThanhToan from './components/DOAN/GioHang/ThanhToan';
import DangKy from './components/DOAN/Account/DangKy';
import DangNhap from './components/DOAN/Account/DangNhap';
import QuanLyTK from './components/DOAN/Account/TaiKhoan';
import DoiMK from './components/DOAN/Account/DoiMK';
import QuanLyDonHang from './components/DOAN/GioHang/QuanLyDonHang';
import GH from './components/DOAN/GioHang/GH';
import QLDH from './components/DOAN/GioHang/TT';
import TT from './components/DOAN/GioHang/TT';




function App() {
  return (
    <>
      <div className='Body'>
        <Routes>
          <Route path='/' element={<Trangchinh />}></Route>
          <Route path='/chi-tiet' element={<Chitiet />}></Route>
          <Route path='/gio-hang' element={<GH />}></Route>
          <Route path='/thanh-toan' element={<TT />}></Route>
          <Route path='/dang-ky' element={<DangKy />}></Route>
          <Route path='/dang-nhap' element={<DangNhap />}></Route>
          <Route path='/qltk' element={<QuanLyTK />}></Route>
          <Route path='/doi-mk' element={<DoiMK />}></Route>
          <Route path='/qldh' element={<QuanLyDonHang />}></Route>
        </Routes>
      </div>
    </>
  );
}
export default App;