import React from 'react'
import axios from 'axios';
import TopRated from '../TopRated/TopRatedMovies';
import { useEffect, useState } from 'react';
import 'aos/dist/aos.css'
import BackToTop from '../BackToTop'
import './Movie.css'
export default function Movies() {
  const [query,setQuery]=useState("");
  const [posts,setPosts]=useState(null);
  let[moviesTrend,setMoviesTrends]=useState([]);

  let trendingMovie=async()=>{
    let {data}=await axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=5e34d5ec805d20a354013e6f692a44bc');
    setMoviesTrends(data.results)
    setPosts(data.results)
  }
  useEffect(() => {
    trendingMovie();
  }, []);
  return (
    <>
 
        <div className="cmingMovies container">
          <label>Search treanding movies..</label>
        <input  class="form-control w-50 searchInput" placeholder='Search tranding movies ... 'onChange={event =>
    setQuery(event.target.value)}/>
    {posts
    && posts.filter((post)=>{
    if(query===''){
    return '';}
    else if(post.original_title.toLowerCase().includes(query.toLowerCase())){
      return post;
    };
    }).map((post,index)=>(
      <div className='box'  key={index}>
        <p >{post.original_title}</p>
        <img src={"https://image.tmdb.org/t/p/w500/"+post.backdrop_path}
        className="subtitle" alt="movie poster" 
       />
      </div>
    ))}
<h3>Trending Movies:</h3>
<div className="row  containerr">
{moviesTrend.map((e,index)=>
<div className="col-md-4">
<div className="Card">
<img src={"https://image.tmdb.org/t/p/w500/"+e.backdrop_path} 
 data-aos="zoom-in-up" data-aos-easing='ease-out-cubic'
 data-aos-duration="2000"className="subtitle" alt="movie poster"/>
<h2>{e.original_title}</h2>

</div>
</div>)}
</div>

</div> 
<TopRated/>
<BackToTop/>
    </>
  )
}
