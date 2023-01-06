import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import './TopRated.css'
export default function TopRated() {
    let[topRated,setTopRated]=useState([]);

    let TopRatedMovies=async()=>{
      let {data}=await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=5e34d5ec805d20a354013e6f692a44bc&language=en-US');
      setTopRated(data.results)
    }
    useEffect(() => {
        TopRatedMovies();
    }, []);
    return (
        <>
   
        <div className="cmingMovies container">
<h3>Top Rated Movies:</h3>
<div className="row  containerr">
   
{topRated.map((e,index)=>

<div className="col-md-4">

<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"><div className="Card">
<img src={"https://image.tmdb.org/t/p/w500/"+e.backdrop_path} 
data-aos="zoom-in-up" data-aos-easing='ease-out-cubic'
data-aos-duration="2000" className="subtitle" alt="movie poster"/>
<h2>{e.original_title}</h2>
<div className="vote">
<p>vote avg : {e.vote_average}</p>
<p>people vote: {e.vote_count}</p>
</div>
</div></div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
</div>

</div>)}
</div>
</div>  
        </>
    );
}

