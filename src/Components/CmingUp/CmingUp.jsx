import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import './CmingUp.css'
import Offline from '../Offline/Offline';
const CmingUp = () => {
    let[upCming,setupCming]=useState([]);

    let upCmingMovies=async()=>{
      let {data}=await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=5e34d5ec805d20a354013e6f692a44bc');
      setupCming(data.results)
      
    }
    useEffect(() => {
      upCmingMovies();
    }, []);
    return (
        <>
        <div className="cmingMovies container">
<h3>Upcoming Movies:</h3>
<div className="row  containerr">
{upCming.map((e,index)=>
<div className="col-md-4">
<div className="Cards">
<img src={"https://image.tmdb.org/t/p/w500/"+e.backdrop_path} 
data-aos="zoom-in-up" data-aos-easing='ease-out-cubic'
data-aos-duration="2000"
 className="subtitle" alt="movie poster"/>
<h2>{e.original_title}</h2>
<p>Release date : {e.release_date}</p>
</div>
</div>)}
</div>
</div>  
<Offline/>
        </>
    );
}

export default CmingUp;
