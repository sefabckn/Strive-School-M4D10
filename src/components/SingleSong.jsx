import {useState} from 'react'

const URL = "https://striveschool-api.herokuapp.com/api/deezer/search?q="


const SingleSong =  async(props) =>{
    const [data, setData] = useState()
    const fetchData = await fetch(URL + props.song)
    const response  = await fetchData.json()
    if(response.ok){
        setData(response)
    }
    return(
        console.log(data)
    )
}
export default SingleSong