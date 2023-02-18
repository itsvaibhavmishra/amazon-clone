import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import "./Register.css";

function Register() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const signUp = e => {
        e.preventDefault();
        
        // firebase register system
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if(auth) {
                    navigate('/');  // auto redirects to '/'
                }
            })
            .catch(error => alert(error.message))
    }

    return(
        <div className="register">
            <Link to="/">
                <img src="https://pngimg.com/uploads/amazon/amazon_PNG1.png" alt="" className="register__logo" />
                <span className="register__in">.in</span>
            </Link>

            <div className="register__container">
                <h1>Create Account</h1>

                <form action="">
                    <h5>Email</h5>
                    {/* e is the event that sends the value being typed by user */}
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button className="signup__button" onClick={signUp} type="submit">Continue</button>
                </form>

                <p className="register__abtncs">By continuing, you agree to Amazon's <a className="tncs" href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=200545940">Condition of Use </a>
                and 
                <a className="register__tncs" href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=200534380"> Privacy Notice</a>.
                </p>
            </div>
                <h5 className="register__hrL">
                    <span>Already have an account?</span>
                </h5>
                <Link to="/login">
                    <button className="signin__button">Sign In to Amazon</button>
                </Link>
        </div>
    )
}


export default Register;