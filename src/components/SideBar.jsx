import Home  from '../components/Home'
import Artist from '../components/Artist'
import Album from '../components/Album'
import { Row ,Col} from 'react-bootstrap'
import logo from '../assets/logo.png'
import library from '../assets/library.png'
import heart from '../assets/heart.png'
import search from '../assets/search.svg'


const SideBar = ()=>{

    return(
    
        <Row>
            <Col>
                <div id="wrapper">
                    <div id="navbar" className="w-15">
                        <div className="menu-nav">
                            <div className="links1-nav">
                                <div id="logo">
                                <img src={logo}  height="40px" alt="..."/>
                                </div>
                                </div>
                            <div className="links-nav">
                                <a href="homepage.html">
                                <img src="https://img.icons8.com/material-outlined/24/000000/home--v2.png"/>
                                <a href={<Home/>}><p>Home</p></a>
                                </a>
                            </div>
                            <div className="links-nav">
                                <a href="search.html">
                                <img src={search} width="24px" height="24px" alt="..."/>
                                <p>Search</p>
                                </a>
                            </div>
                            <div id="yourLibrary" className="links-nav">
                                <a href="album.html">
                                <img src={library} width="22px" height="22px" alt="..."/>
                                <a href={<Album/>}><p>Your Library</p></a>
                                </a>
                            </div>
                            <div className="links-nav">
                                
                                <img src="assets/creat-playlist.png" width="25px" height="25px" alt="..."/>
                                <p>Create Playlist</p>
                                
                            </div>
                            <div className="links-nav">
                                <a href={<Artist/>}>
                                <img src={heart} width="25px" height="25px" alt="..."/>
                                <a href="artist.html"><p>Liked Songs</p></a>
                                </a> 
                            </div>
                            <div>
                                <button class = "signup-button"type="submit">Sign Up</button>
                                <button class = "login-button" type="submit">Log in</button>
                            </div>

                        </div>
                        
                          
                    </div>
                </div>  
            </Col>
        </Row>
   
    )
       
       

    

}

export default SideBar