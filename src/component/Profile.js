import React from 'react';
import './Profile.css';

const Profile = ({ match }) => (
  <div className='BOL'>
    <header className='prof'>Profile</header>
    <div className='Mon'>
    <div className='sign'>
    <img className="Not" src='./hi.ico' alt='icon'/>
    <p className='hyper'>Ezekyle Cortes Vila</p>
    </div>
    <p className='Ben'>You can create beautiful things - but you have to see them in your mind first. There are no mistakes. You can fix anything that happens. Now it's beginning to make a little sense. Maybe there's a happy little waterfall happening over here. In painting, you have unlimited power. You have the ability to move mountains. You don't have to be crazy to do this but it does help.</p>
    </div>
    <footer className='Hen'>End</footer>
    <div className="yat">
    <iframe className='singko' width="560" height="315" src="https://www.youtube.com/embed/tYzXazUvCYQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="happy"></iframe>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/dR6Tjfglvjo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="seem"></iframe>
    </div>
  </div>
);


export default Profile;