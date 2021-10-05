import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import { API_KEY, image_w500} from '../../constants/constants'
import Youtube from 'react-youtube'

function RowPost(props) {
    const [ytMovie, setytMovie] = useState()
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1
        },};
    const [rowMovies, setrowMovies] = useState([])
    useEffect(() => {     
        axios.get(props.genre).then((response) =>{
            console.log(response.data);
            setrowMovies(response.data.results)
        }).catch((error) =>{
            console.log(error)
        })
    }, []);
    const movieHandler = (id) => {
        axios.get(`/movie/${id}/videos?language=en-US&api_key=${API_KEY}`).then((response) =>{
            console.log(response.data)
            if(response.data.results.length !== 0){
                setytMovie(response.data.results[0].key)
            }
        }).catch((error)=>{
            console.log(error)
        })
    }
    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className="posters">
                {rowMovies.map((obj) =>{
                    return(
                          <img onClick={()=>{movieHandler(obj.id)}} className={props.small ? "small-poster" : "poster"} src={image_w500 + obj.backdrop_path}  alt="poster" />
                    )
                })}
            </div>
            {ytMovie &&
            <div id="youtube">
                <Youtube videoId={ytMovie} opts={opts}  />
            </div> }
            
        </div>
    )
}

export default RowPost
