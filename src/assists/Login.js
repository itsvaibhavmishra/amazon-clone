import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {

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
                    <input type="email"  />

                    <h5>Password</h5>
                    <input type="password" />

                    <button className="signin__button">Sign in</button>
                </form>

                <p className="abtncs">By continuing, you agree to Amazon's <a className="tncs" href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=200545940">Condition of Use </a>
                and 
                <a className="tncs" href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=200534380"> Privacy Notice</a>.
                </p>
            </div>
                <h5 className="hrL">
                    <span>New to Amazon?</span>
                </h5>
                <button className="signup__button">Create your Amazon account</button>
        </div>
    )
}

export default Login;