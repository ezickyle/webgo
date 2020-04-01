import React from 'react';
import './Contacts.css';

const Contact = () => (
  <div className='san'>
  <div>
        <h1 className="contact">Contacts</h1>
    <div className='Loop'>
    <div className='one'>
      <img src="https://img.icons8.com/color/48/000000/facebook.png" alt="how"></img>
      <a class="btn btn-primary btn-xs" href="https://www.facebook.com/ezic.vila" role="button">Facebook</a>
      </div>
      <div className='two'>
      <img src="https://img.icons8.com/color/48/000000/twitter.png"  alt='hello'></img>
      <a class="btn btn-primary btn-xs" href="https://twitter.com/ezekyle27" role="button">Twitter</a>
      </div>
      <div className='three'>
      <img src="https://img.icons8.com/color/48/000000/instagram-new.png"  alt='hello'></img>
      <a class="btn btn-primary btn-xs" href="https://www.instagram.com/ezicvila/" role="button">Instagram</a>
      </div>
      <div className='four'>
      <img src="https://img.icons8.com/color/48/000000/youtube-play.png" alt='hii'></img>
      <a class="btn btn-primary btn-xs" href="https://www.youtube.com/channel/UCeuk892DFNZZavzLDobOGqQ?view_as=subscriber" role="button">YouTube</a>
    </div>
    <p className='ending'>Thank you for visiting!</p>
    </div>
    

  </div>
  </div>
);

export default Contact;