import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import { image_w500} from '../../constants/constants'


function RowPost(props) {
    const [rowMovies, setrowMovies] = useState([])
    useEffect(() => {     
        axios.get(props.genre).then((response) =>{
            console.log(response.data);
            setrowMovies(response.data.results)
        }).catch((error) =>{
            console.log(error)
        })
    }, [])
    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className="posters">
                {rowMovies.map((obj) =>{
                    return(
                          <img className={props.small ? "small-poster" : "poster"} src={image_w500 + obj.backdrop_path} alt="poster" />
                    )
                })}
            </div>
        </div>
    )
}

export default RowPost
