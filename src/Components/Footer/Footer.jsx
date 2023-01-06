import React from 'react'
import Log from './logo.png'
import CardPic from './card_img.png'
import './Footer.css'
import { Link } from 'react-router-dom'
import popCorn from './Z0BZ.gif'
export default function Footer() {
  return (
    <footer className='footer'>
        
        <div className="row container foot">
          <div className="col-md-3">
            <img className='footerLogo' src={Log} alt='logo'/>
            <h5>Movflx Online the relase etras thats <br/>
            sheets continig passag.</h5>
            <p><i class="fa-solid fa-location-dot"></i> Adress :PO Box W75 Street </p>
            <p><i class="fa-solid fa-phone"></i> Phone :+24 1245 654 235</p>
            <p><i class="fa-solid fa-envelope"></i> E-mail :info@exemple.com</p>
            </div> 
            <div className="col-md-3 pages">
            <h4 >Pages :</h4> 
            <Link className="nav-link " to="home">Home</Link>        
            <Link className="nav-link" to="movies">Movies</Link>    
            <Link className="nav-link" to="people">People</Link>
            <Link className="nav-link" to="tvshowes">Tv shows</Link>
            <Link className="nav-link" to="contact">Contact</Link>
 
            </div> 

        <div className="col-md-3 social">
           <h4> Contact Us :</h4>
           <div className="brands">
           <i class="fa-brands fa-facebook-f"></i>
           <i class="fa-brands fa-twitter"></i>
           <i class="fa-brands fa-pinterest"></i>
           <i class="fa-brands fa-linkedin-in"></i>
        </div>
        <input placeholder="Enter Your Email.." type="text" class="inputt" required=""></input>
        <i class="fa-solid fa-rocket"></i>
        </div>
        <div className="col-md-3 popCorn">
            <img src={popCorn} alt="lastphoto" className='w-75' />
        </div>
        </div>
        <div className="copyRight">
        <div className="copy container d-flex">
            <p>Copyright © 2022 All Rights Reserved By Movflx</p>
            <img src ={CardPic} alt='cards'/>
        </div>
        </div>
    </footer>
  )
}
