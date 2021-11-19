import Home  from './Home'
import Artist from './Artist'
import Album from './Album'
import { Row ,Col} from 'react-bootstrap'
import logo from '../assets/logo.png'

const SideBar = ()=>{

    return(
    
        <Row>
            <Col>
                <div id="wrapper">
                    <div id="navbar" className="w-15">
                        <div className="menu-nav">
                        <div className="links1-nav">
                            <div id="logo">
                            <img src={logo} width="120px" height="60px" alt="..."/>
                            </div>
                            </div>
                        <div className="links-nav">
                            <a href="homepage.html">
                            <img src="assets/home.png" width="22px" height="22px" alt="..."/>
                            <a href={<Home/>}><p>Home</p></a>
                            </a>
                        </div>
                        <div className="links-nav">
                            <a href="search.html">
                            <img src="assets/search.png" width="24px" height="24px" alt="..."/>
                            <p>Search</p>
                            </a>
                        </div>
                        <div id="yourLibrary" className="links-nav">
                            <a href="album.html">
                            <img src="../assets/library.png" width="22px" height="22px" alt="..."/>
                            <a href={<Album/>}><p>Your Library</p></a>
                            </a>
                        </div>
                        <div className="links-nav">
                            
                            <img src="assets/creat-playlist.png" width="25px" height="25px" alt="..."/>
                            <p>Create Playlist</p>
                            
                        </div>
                        <div className="links-nav">
                            <a href={<Artist/>}>
                            <img src="./assets/liked-song.png" width="25px" height="25px" alt="..."/>
                            <a href="artist.html"><p>Liked Songs</p></a>
                            </a> 
                        </div>
                        </div>
                    
                        <Row>
                            <Col>
                            <div className="links-small-nav">
                                    <button className="signup-button"type="submit">SIGN UP</button>
                                    <button className="login-button"type="submit"> LOGIN </button>
                             </div>
                            
                            
                            </Col>
                            
                        </Row>
                    </div>
                </div>  
            </Col>
        </Row>
   
    )
       
       

    

}

export default SideBar