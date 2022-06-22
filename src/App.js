import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import { MainTemplate } from './templates/MainTemplate/MainTemplate';
import WebFont from 'webfontloader';

import Works from './pages/Works/Works';
import Contact from './pages/Contact/Contact';

function App() {


  return (
    <div className='App'>
      <Routes>
        {/* <Route path='home' element={<Home/>}></Route>
        <Route path='about' element={<About/>}></Route> */}
        <Route path='/' element={<MainTemplate Component={Home} />} />
        <Route path='home' element={<MainTemplate Component={Home} />} />
        <Route path='about' element={<MainTemplate Component={About} />} />
        
        <Route path='works' element={<MainTemplate Component={Works} />} />
        <Route path='contact' element={<MainTemplate Component={Contact} />} />
      </Routes>
    </div>

  );
}



export default App;
