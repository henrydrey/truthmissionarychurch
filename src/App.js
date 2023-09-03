import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './assets/imgs/png-church-logo.jpg';
import Navbar from './component/Navbar/Navbar';
import Home from './component/Content/HomePage/Home'
import './index.css';
import "../src/assets/imgs/church-logo.jpg"
import AWANA from './component/Content/Pages/Ministries/AWANA/AWANA';
import SundaySchool from './component/Content/Pages/Ministries/Sunday School/SundaySchool';
import Ladies from './component/Content/Pages/Ministries/Ladies/Ladies';
import Youth from './component/Content/Pages/Ministries/Youth/Youth';
import Choir from './component/Content/Pages/Ministries/Choir/Choir';

const App = () => {

  return (
    <div className=' bg-slate-100 font-sans font-[Poppins]'>
      <header className=" w-full flex justify-between bg-white">
        <img src={logo} className="content-center h-24 w-80 justify-center mr-auto ml-auto block py-4 sticky" alt="logo" />
        {/* <div className='text-3xl mt-8' onClick={() => setOpen(!open)}>
        <ion-icon name={`${ open ? "close" : "menu"}`}></ion-icon>
        </div> */}
    </header>
    
        <BrowserRouter>
          <Navbar className="sticky"/>
          <div className=' ml-5 mr-5 h-full'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route exact path='/awana' element={<AWANA />} />
            <Route path='/sunday-school' element={<SundaySchool />} />
            <Route path='/ladies-fellowship' element={<Ladies />} />
            <Route path='/youth-fellowship' element={<Youth />} />
            <Route path='/choir' element={<Choir />} />
          </Routes>
          </div>
        </BrowserRouter>


        


        {/* <Routes>
          <Route path='/' exact component={<Home />} />
        </Routes> */}

        {/* <h1 className="text-3xl font-bold underline mb-10 mt-10 justify-center">
          Hello world!
          </h1> */}
      {/* </div> */}
    </div>
    
  );
}

export default App;
