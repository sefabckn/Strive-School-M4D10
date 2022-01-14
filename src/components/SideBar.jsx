import Home from '../components/Home'
import Artist from '../components/Artist'
import Album from '../components/Album'
import { Row, Col } from 'react-bootstrap'
import logo from '../assets/logo.png'
import library from '../assets/library.png'
import heart from '../assets/heart.png'
import search from '../assets/search.svg'
import homeIcon from '../assets/home-fill.svg'
import queue from '../assets/queue.png'
import { Link } from 'react-router-dom'
const SideBar = () => {

    return (

        <Row>
            <Col>
                <div id="wrapper">
                    <div id="navbar" className="w-15">
                        <div className="menu-nav">
                            <div className="links1-nav">
                                <div id="logo">
                                    <img src={logo} height="40px" alt="..." />
                                </div>
                            </div>
                            <Link to='/'>
                                <div className="links-nav">
                                    <img src={homeIcon} style={{ color: 'white' }} />
                                    <p>Home</p>
                                </div>
                            </Link>
                            <div className="links-nav">
                                <img src={search} width="24px" height="24px" alt="..." />
                                <p>Search</p>
                            </div>
                            <Link to='/album'>
                                <div id="yourLibrary" className="links-nav">
                                    <img src={library} width="22px" height="22px" alt="..." />
                                    <p>Your Library</p>
                                </div>
                            </Link>
                            <div className="links-nav">
                                <img src={queue} width="25px" height="25px" alt="..." />
                                <p>Create Playlist</p>
                            </div>
                            <Link to='/artist'>
                                <div className="links-nav">
                                    <img src={heart} width="25px" height="25px" alt="..." />
                                    <p>Liked Songs</p>
                                </div>
                            </Link>
                            <div>
                                <button class="signup-button" type="submit">Sign Up</button>
                                <button class="login-button" type="submit">Log in</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>

    )





}

export default SideBar