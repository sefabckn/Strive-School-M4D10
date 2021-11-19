
import './App.css';
import SideBar from './components/SideBar';
import reactDom from 'react-dom';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Footer from './components/Footer'
import TopBar from './components/Topbar';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <SideBar/>
      <TopBar />
      <Routes>
        <Route path="/home" element={<Home/>}/>
          
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
