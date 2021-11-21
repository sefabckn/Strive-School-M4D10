import {Row, Col} from 'react-bootstrap'
import play from '../assets/play.png'
import previouse from '../assets/previouse.png'
import next from '../assets/next.png'
import connect from '../assets/connect.png'
import shuffle from '../assets/shuffle.png'
import repeat from '../assets/repeat.png'
import queue from '../assets/queue.png'
const Footer = () =>{

return(
    <div className="container-fluid" id="footer">
    <Row id="footer-content" className="d-flex">
    <Col md={3} className="songInfo d-none d-lg-flex">
        <img src="logo.ico" className="box_image mr-2" alt="..." width="50px" height="50px"/>
        <a href="#"><span className="box_title">..Song name<br/><span>Artist name</span> </span></a>
        <i className="far fa-heart ml-4 mr-2"></i>
        <img src="assets/monitor.png" width="16px" height="18px"/>
      </Col> 
      <Col md={8} lg={6} id="play-buttons d-flex">
        <Row className="d-flex">
            <div className="icons d-flex justify-content-center align-items-center">
                <img src={shuffle} alt="" />
                <img src={previouse} alt="..." width="25px" height="25px" className="mx-2" id="masterPlay" aria-hidden="true" onclick="pausePlay()"/>
                <img src={play} alt="..." width="35px" height="35px" className="mx-2" id="masterPlay" aria-hidden="true" onclick="pausePlay()"/>
                <img src={next} alt="..." width="25px" height="25px" className="mx-2" id="masterPlay" aria-hidden="true" onclick="pausePlay()"/>
                <img src={repeat} alt="" />
                  
              </div>
              <div>
                  <input type="range" name="range" id="myProgressBar" className="bg-secondary" min="0" value="0" max="100"/>
              </div>
        </Row>
      </Col>
      <div className="icons1 col-3 d-none d-md-flex">
        <div className="d-none d-lg-flex">
            <img src={queue} alt="" width="20px" height="20px"/>
            <img src={connect} alt="..." width="20px" height="20px" className="mx-1"/>
        </div>
        <div id="audio">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-volume-up-fill" viewBox="0 0 16 16">
            <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/>
            <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/>
            <path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"/>
          </svg>
          <input type="range" min="1" max="100" value="50" className="slider" id="myRange"/></div>
      </div>
    </Row>
  </div>


)


}
export default Footer