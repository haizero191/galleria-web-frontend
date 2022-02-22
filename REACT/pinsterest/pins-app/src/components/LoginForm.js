import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import "./scss/LoginForm.scss";
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';





const LoginForm = () => {
    var history = useHistory()
    const [userInfo, setUserInfo] = useState({})
    
    const responseFacebook = (res) => {
        console.log(res);
        const navbar = document.querySelector(".Navbar");   
        navbar.style.display = 'flex';
        setUserInfo(res);
        history.push("/");
    }
    const responseGoogle = () => {
        console.log("success")
    }

    useEffect(() =>{
        localStorage.setItem("accessUser", JSON.stringify(userInfo))
    },[userInfo])
    
    return (
        <div className='LoginForm'>
            <div className='logo'>
                <img src="https://img.icons8.com/fluency/40/000000/pinterest.png"/>
            </div>
            <div className='title'>
                <h2>Chào mừng bạn đến với Pinterest</h2>
            </div>
            <div className='main-content'>
                <div className='input-form'>
                    <div className='control'>
                        <input name="email" placeholder='Email'></input>
                    </div>
                    <div className='control'>
                        <input name="password" placeholder='Password'></input>
                    </div>
                    <div className='control password-reset'>
                        <a>Quên mật khẩu?</a>
                    </div>
                    <div className='control login-btn'>
                        <button>Đăng nhập</button>
                    </div>
                    <h3>Hoặc</h3>
                    <div className='more-login'>
                        <div className='login-fb'>
                            <FacebookLogin
                                    appId="330698718618222" 
                                    fields="name,email,picture"
                                    callback={responseFacebook}
                                    cssClass="facebook-button-class btn"
                                    icon="fa-facebook"
                                    textButton="Tham gia với facebook"
                            />
                        </div>
                        <div className='login-gmail'>
                            <GoogleLogin
                                clientId="597055136598-63aiqpo9h5pb2qqljp1neeba6lvqvqlb.apps.googleusercontent.com"
                                buttonText="Tham gia với google"
                                onSuccess={responseGoogle}
                                //onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                                cssClass="facebook-button-class btn"
                                icon="fa-google"
                            />
                        </div>   
                    </div>
                    <div className="sign-up">
                        <a>Chưa tham gia Pinterest? Đăng kí</a>
                    </div>
                </div>
            </div>
        </div>
    )
}





export default LoginForm
