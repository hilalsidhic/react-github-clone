import React, { useState } from 'react'
import './Banner.css'
import { useEffect } from 'react'
import { API_KEY, image_url } from '../../constants/constants'
import axios from '../../axios'

function Banner() {
    const [movie, setmovie] = useState([])
    useEffect(() => {
        axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
          console.log(response.data.results[0]);
          setmovie(response.data.results[0])
        }).catch((error) => {
            console.error(error)
        })
      }, [])
    return (
        <div className="banner" 
        style={{backgroundImage:`url(${movie ? image_url+ movie.backdrop_path : ""})`}}>
            <div className="content">
                <h1 className="title">{movie ? movie.name : ''}</h1>
                <div className="banner-buttons">
                    <button className="button">Play</button>
                    <button className="button">My List</button>
                </div>
                <h1 className="description">{movie ? movie.overview : ""}</h1>
            </div>
            <div className="fade_bottom">
            </div>
        </div>
    )
}

export default Banner
