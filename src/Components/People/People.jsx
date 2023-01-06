import React from 'react';
import axios from 'axios';
import BackToTop from '../BackToTop'
import { useEffect, useState } from 'react';
const People = () => {
    let[personTrend,setPersonTrend]=useState([]);
    let trendingPerson=async()=>{
      let {data}=await axios.get('https://api.themoviedb.org/3/trending/person/week?api_key=5e34d5ec805d20a354013e6f692a44bc');
      setPersonTrend(data.results)
    }
    useEffect(() => {
      trendingPerson();
    }, []);
    return (
        <div>
             <div>
        <div className="cmingMovies container">
<h3>Trending Actors:</h3>
<div className="row  containerr">
{personTrend.map((e,index)=>
<div className="col-md-4">
<img src={"https://image.tmdb.org/t/p/w500/"+e.profile_path} 
 data-aos="zoom-in-up" data-aos-easing='ease-out-cubic'
 data-aos-duration="2000"
 className="subtitle" alt="trending person"/>
<h2>{e.original_name}</h2>

</div>)}
</div>
<BackToTop/>
</div> 
        </div>
        
        </div>
    );
}

export default People;
