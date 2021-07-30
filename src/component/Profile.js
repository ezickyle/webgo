import React from 'react';
import './Profile.css';

const Profile = ({ match }) => (
  <div className='BOL'>
    <h1 className='prof'>Profile</h1>
    <div className='Mon'>
    <div className='sign'>
    <img className="Not" src='./Picture.ico' alt='icon'/>
    <div className='Just'>
    <p>Ezekyle Cortes Vila</p>
    <p>Sex: Male</p>
    <p>Age: 28</p>
    <p>Date of Birth: April 13 1992</p>
    </div>
    </div>
    <header className="Ben">You can create beautiful things - but you have to see them in your mind first. There are no mistakes. You can fix anything that happens. Now it's beginning to make a little sense. Maybe there's a happy little waterfall happening over here. In painting, you have unlimited power. You have the ability to move mountains. You don't have to be crazy to do this but it does help.</header>
    </div>
    <body className="hachi" >Technologies that I know:
    <img src='./icons/html.ico' alt=''></img>
    <img src='./icons/css.ico' alt=''></img>
    <img src='./icons/JS.ico' alt=''></img>
    <img src='./icons/NodeJS.ico' alt=''></img>
    <img src='./icons/NPM.ico' alt=''></img>
    <img src='./icons/python.ico' alt=''></img>
    <img src='./icons/bootstrap.ico' alt=''></img>
    <img src='./icons/VS.ico' alt=''></img>
    <img src='./icons/MSoffice.ico' alt=''></img>
    <img src='./icons/Adobe.ico' alt=''></img>
    <img src='./icons/3DSMAX.ico' alt=''></img>
    <img src='./icons/CAD.ico' alt=''></img>
    </body>
    <footer className='Hen'>Why my freelance business is the best? I offer 100% Hardwork, Intelligence & Diligence.</footer>
  </div>
);


export default Profile;