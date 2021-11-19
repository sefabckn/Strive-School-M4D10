import logo from './logo.svg';
import './App.css';
import MyNavBar from './components/MyNavBar';
import reactDom from 'react-dom';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Footer from './components/F'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <MyNavBar />
      <Routes>
        <Route path="/home" element={<Home/>}/>
          
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
