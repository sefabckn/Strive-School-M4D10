import TopBar from "./Topbar"
import Footer from './Footer'
import SingleSong from "./SingleSong"
const Home = () =>{
    return(
        <div className="col-12 col-md-9 offset-md-3 mainPage">
            <SingleSong song = "eminem" />
        </div>
    )
}
export default Home