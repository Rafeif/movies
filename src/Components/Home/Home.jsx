import React from "react";
import CmingUp from "../CmingUp/CmingUp";
import "./Home.css";
import pic1 from './one.jpg'
import pic2 from './two.jpg'
import pic3 from './three.jpg'
import Footer from "../Footer/Footer";
import BackToTop from "../BackToTop";
import { useEffect } from "react";
import AOS from 'aos';

import 'aos/dist/aos.css'
export default function Home() {
  useEffect(()=>{
    AOS.init({duration:2000});
  },[]);
  return (
    <>
      <div className="header">
        <div className="vertical-center container movbok">
          <h1>MOVBOK</h1>
          <h1>MOVBOK</h1>
          <h2> Unlimited Movie, TVs Shows, & More.</h2>
        </div>
      </div>
<CmingUp/>
<div className="Team">
<h2 className="ourTeam">Meet Our Team</h2>
<div className=" team">

<div className="member" data-aos="fade-up">
<div className="info"><i class="fa-brands fa-facebook"></i>
<i class="fa-brands fa-instagram"></i>
<i class="fa-brands fa-linkedin"></i></div>
<img src={pic1} alt='team member' className="memberPic"  />
<h5>Elisa Velasques</h5>
<p>Editor</p>

</div>
<div className="member" data-aos="fade-down">
<div className="info"><i class="fa-brands fa-facebook"></i>
<i class="fa-brands fa-instagram"></i>
<i class="fa-brands fa-linkedin"></i></div>
<img src={pic2} alt='team member'/>
<h5>Elisa Velasques</h5>
<p>Editor</p>
</div>
<div className="member" data-aos="fade-right">
<div className="info"><i class="fa-brands fa-facebook"></i>
<i class="fa-brands fa-instagram"></i>
<i class="fa-brands fa-linkedin"></i></div>
<img src={pic3} alt='team member'/>
<h5>Elisa Velasques</h5>
<p>Editor</p>
</div>
  </div>
  </div>
  <div className="subscribe">
 <div className="newsletter">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-xl-7 col-lg-7">
        <div className="section-title text-center">
          <h2>TRIAL START FIRST 30 DAYS.</h2>
          <p>Enter your email to create or restart your membership.</p>
        </div>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-xl-7 col-lg-7">
        <form className="newsletter-form">
          <input  className="Input"type="email" placeholder="Enter your email..." required />
          <button className="bb" type="submit">Get Started</button>
        </form>
      </div>
    </div>
  </div>
</div>
<Footer/>
<BackToTop/>
  </div>
    </>
  );
}
