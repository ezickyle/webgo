import React from 'react';
import './User.css';

const User = () => (
  <div className='silly'>
  <h1 className="create">User</h1>
  <div id='login-box'>
  <div class='right-box'>
        <h1 class="liss"> Sign Up </h1>
        <input type="text" name='Username' placeholder='Username'/>
        <input type="text" name='E-mail' placeholder='E-mail'/>
        <input type="password" name='Password' placeholder='Password'/>
        <input type="password" name='Password' placeholder='Re-type'/>
        <input type="Submit" value='Sign Up'/>
    </div>  
	<div class="left-box">
        <span>Log in with<br/>Social Network</span>

		<button class="work" type="btn" href="#">Log in with Facebook</button>
		<button class="work" type="btn" href="#" >Log in with Twitter</button>
		<button class="work" type="btn" href="#">Log in with Google+</button>
	</div>
    <div class="or">OR</div>
    </div>
    </div>
);


export default User;