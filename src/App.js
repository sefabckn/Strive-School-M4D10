
import './App.css';
import SideBar from './components/SideBar';
import reactDom from 'react-dom';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Footer from './components/Footer'
import TopBar from './components/Topbar';
import Album from './components/Album'
import Artist from './components/Artist'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <TopBar />
      <SideBar />
     {/*  <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/album' element= {<Album />} />
        <Route path='/artist' element={<Artist />} />
      </Routes> */}
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
