import React from 'react';
import Footer from '../Footer/Footer';
import './Contact.css'
const Contact = () => {
    return (
        <div>
           <div className="container contactUs">  
<div id="contact" action method="post">
  <h2> Contact Form</h2>
  <h4>Contact us for custom quote</h4>
  <fieldset>
    <input placeholder="Your name" type="text" tabIndex={1} required autofocus />
  </fieldset>
  <fieldset>
    <input placeholder="Your Email Address" type="email" tabIndex={2} required />
  </fieldset>
  <fieldset>
    <input placeholder="Your Phone Number (optional)" type="tel" tabIndex={3} required />
  </fieldset>
  <fieldset>
    <input placeholder="Your Web Site (optional)" type="url" tabIndex={4} required />
  </fieldset>
  <fieldset>
    <textarea placeholder="Type your message here...." tabIndex={5} required defaultValue={""} />
  </fieldset>
  <fieldset>
    <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
  </fieldset>
 
</div>
<div className='map'>
<iframe title="This is a unique title" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27002.037090424805!2d35.247679299999994!3d32.224309549999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ce0f650425697%3A0x7f0ba930bd153d84!2sNablus!5e0!3m2!1sen!2sil!4v1672950478213!5m2!1sen!2sil" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

</div>
</div>
<Footer/>
        </div>
    );
}

export default Contact;
