import { Link } from 'react-router-dom'


const TopBar = () => {
    return (
        <div className="row justify-content-center">
            <div id='topbar-comp' className="col-6 mainLinks d-md-flex">
                <Link to="/album"><div id="Rock" className='text-white'>ROCK</div></Link>
                <Link to="/album"><div id="Pop"className='text-white'>POP</div></Link>
                <Link to="/album"><div id="Hip Hop"className='text-white'>HIP HOP</div></Link>
                <Link to="/album"><div className='text-white'>NEW RELEASES</div></Link>
                <Link to="/album"><div className='text-white'>DISCOVER</div></Link>
            </div>
        </div>
    )
}

export default TopBar