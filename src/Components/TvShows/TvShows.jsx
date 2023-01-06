import React from 'react';
import axios from 'axios';
import BackToTop from '../BackToTop'
import { useEffect, useState } from 'react';
import TopRatedTV from '../TopRatedTv/TopRatedTv';
const TvShows = () => {
    let[tvTrend,setTvTrend]=useState([]);
    let trendingTv=async()=>{
      let {data}=await axios.get('https://api.themoviedb.org/3/trending/tv/week?api_key=5e34d5ec805d20a354013e6f692a44bc');
      setTvTrend(data.results)
    }
    useEffect(() => {
      trendingTv();
    }, []);
    return (
        <div>
        <div className="cmingMovies container">
<h3>Trending Tv Shows:</h3>
<div className="row  containerr">
{tvTrend.map((e,index)=>
<div className="col-md-4">
<img src={"https://image.tmdb.org/t/p/w500/"+e.backdrop_path}
data-aos="zoom-in-up" data-aos-easing='ease-out-cubic'
data-aos-duration="2000"
 className="subtitle" alt="movie poster"/>
<h2>{e.original_name}</h2>

</div>)}
</div>

</div> 
<TopRatedTV/>
<BackToTop/>
        </div>
        
    );
}

export default TvShows;
