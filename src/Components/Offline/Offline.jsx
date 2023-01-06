import React from 'react';
import Offlin from './pexels-photo-265685.webp'
import './Offline.css'

const Offline = () => {
    return (
        <div>
            <div className="offServices">
            <div className="offImg">
          <img src={Offlin} alt='watch offline' data-aos="fade-right"
          data-aos-easing='ease-out-cubic'
          data-aos-duration="2000"/> 
          </div> 
            <div className="services" data-aos="fade-left"
          data-aos-easing='ease-out-cubic'
          data-aos-duration="2000">
                <h2>OUR SERVICES...</h2>
                <h4>Download Your Shows Watch Offline...</h4>
                <p>Lorem ipsum dolor sit amet, consecetur adipiscing elseddo
                     eiusmod tempor.There are many variations of passages of lorem Ipsum available,
                     but the majority have suffered alteration in some injected humour.</p>
            <div >
        <div className="iconServices">
        <i class="fa-solid fa-tv"></i>
        <div><h5>Enjoy on Your TV.</h5>
        <p>Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor.
         Watch Everywhere.</p></div>
        </div>
        <div className="iconServices">
        <i class="fa-solid fa-video"></i>
        <div><h5>Enjoy on Your TV.</h5>
        <p>Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor.
        Watch Everywhere.</p></div>
        </div>
            </div>
            </div>
          
        </div>
       </div>
       
    );
}

export default Offline;
