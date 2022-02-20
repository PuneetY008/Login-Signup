import React, { Component } from 'react';
import './Login.css';

class Signup extends Component{
    render(){
        return(
            <div className='Login'>
                <h2>Signup</h2>
                <form className='Login-form'>
                    <div className='login-form-input'>
                        <label for="username">Username</label>
                        <input id='username' type="text" className='form-inp' placeholder='username@gmail.com' />
                    </div>
                    <div className='login-form-input'>
                        <label for="password">Password</label>
                        <input id='password' type="text" className='form-inp' placeholder='********' />
                    </div>
                    <div className='user-settings'>
                        <div className='remember-box'>
                            <input type="checkbox" id='remember-checkbox'/>
                            <label for="remember-checkbox">Remember Me</label>
                        </div>
                        <a href='#'>Forgot Password?</a>
                    </div>
                    <button type='submit' className='form-btn'>SignUp</button>
                </form>
            </div>
        );
    }
}

export default Signup;