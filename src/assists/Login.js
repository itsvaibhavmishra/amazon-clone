import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import "./Login.css";


function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        
        // firebase login system
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                navigate('/');
            })
            .catch(error => alert(error.message));
    }

    return(
        <div className="login">
            <Link to="/">
                <img src="https://pngimg.com/uploads/amazon/amazon_PNG1.png" alt="" className="login__logo" />
                <span className="login__in">.in</span>
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>

                <form action="">
                    <h5>Email</h5>
                    {/* e is the event that sends the value being typed by user */}
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button className="signin__button" onClick={signIn} type="submit">Sign in</button>
                </form>

                <p className="abtncs">By continuing, you agree to Amazon's <a className="tncs" href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=200545940">Condition of Use </a>
                and 
                <a className="tncs" href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=200534380"> Privacy Notice</a>.
                </p>
            </div>
                <h5 className="hrL">
                    <span>New to Amazon?</span>
                </h5>
                <Link to="/register">
                    <button className="signup__button">Create your Amazon account</button>
                </Link>
        </div>
    )
}

export default Login;