

const URL = "https://striveschool-api.herokuapp.com/api/deezer/search?q="

const SingleSong =  async(props) =>{
    
    const fetchData = await fetch(URL + {props.song})
    const response  = await fetchData.json()
    if(response.ok){
        console.log(response)
    }

    return(
        
    )

}
export default SingleSong