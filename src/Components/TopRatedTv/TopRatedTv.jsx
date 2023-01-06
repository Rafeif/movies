import React from 'react'
import axios from 'axios';
import  './TopRatedTv.css';
import { useState,useEffect } from 'react';
export default function TopRatedTV() {
    let[topRatedTv,setTopRatedTv]=useState([]);

    let TopRatedTv=async()=>{
      let {data}=await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=5e34d5ec805d20a354013e6f692a44bc&language=en-US');
      setTopRatedTv(data.results)
    }
    useEffect(() => {
        TopRatedTv();
    }, []);
    return (
        <>
   
        <div className="cmingMovies container">
<h3>Top Rated Tv Shows:</h3>
<div className="row  containerr">
   
{topRatedTv.map((e,index)=>

<div className="col-md-4">

<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active"  data-aos="zoom-in-up" data-aos-easing='ease-out-cubic'
        data-aos-duration="2000" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"><div className="Card">
<img src={"https://image.tmdb.org/t/p/w500/"+e.backdrop_path} className="subtitle" alt="movie poster"/>
<h2>{e.original_title}</h2>
<div className='vot'>
  vote avg : {e.vote_average}
people vote: {e.vote_count}</div>
</div></div>
</div>

</div>)}
</div>
</div>  
        </>
    );
}

