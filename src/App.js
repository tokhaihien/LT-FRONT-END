import { Route, Routes } from 'react-router-dom';
import './vendor/bootstrap.min.css';
import './vendor/bootstrap.bundle.min.js';
import './Dang_nhap.js';
import './Dang_nhap.css';

import './vendor/css/bootstrap.min.css';
import './vendor/css/font-awesome.min.css';
import './vendor/css/slicknav.min.css';
import './vendor/css/style.css';

import Index from './pages/index.js';
import Detail from './pages/product_detail';
import Product_type from './pages/product_type';
import Product from './pages/product';

import './Product.css';
import Gio_hang from './pages/gio_hang';
import Thanh_toan from './pages/thanh_toan';
import Dang_nhap from './pages/dang_nhap';
import Dang_ky from './pages/dang_ky';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/detail' element={<Detail />} />
        <Route path='/product_type' element={<Product_type />} />
        <Route path='/list_all' element={<Product />} />
        <Route path='/gio_hang' element={<Gio_hang/>}/>
        <Route path='/thanh_toan' element={<Thanh_toan/>}/>
        <Route path='/dang_nhap' element={<Dang_nhap/>}/>
        {/* <Route path='/xl_dang_nhap' element={<Index/>}/> */}
        <Route path='/dang_ky' element={<Dang_ky/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;