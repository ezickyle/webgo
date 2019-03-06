import React from 'react';
import './Profile.css';

const Profile = ({ match }) => (
  <div className='BOL'>
    <h1 className='prof'>Profile</h1>
    <div className='Mon'>
    <div className='sign'>
    <img className="Not" src='./hi.ico' alt='icon'/>
    <p className='hyper'>Ezekyle Cortes Vila</p>
    </div>
    <header className='Ben'>You can create beautiful things - but you have to see them in your mind first. There are no mistakes. You can fix anything that happens. Now it's beginning to make a little sense. Maybe there's a happy little waterfall happening over here. In painting, you have unlimited power. You have the ability to move mountains. You don't have to be crazy to do this but it does help.</header>
    </div>
    <body className="hachi">hello</body>
    <footer className='Hen'>End</footer>
  </div>
);


export default Profile;