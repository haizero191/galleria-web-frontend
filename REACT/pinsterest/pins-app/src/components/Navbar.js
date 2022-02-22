import React, { useState, useEffect } from 'react';
import "./scss/Navbar.scss";
import { connect } from 'react-redux'
import  { useHistory, useLocation,Link } from "react-router-dom"
import * as actionCreators from "../redux/actions/PictureActions"
import queryString from 'query-string';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';


export const UserConfig = ({active}) => {
    const [auth, setAuth] = useState({});

    useEffect(() => {
        const authData = JSON.parse(localStorage.getItem("accessUser"));
        console.log(authData);
        if(!auth)
            Redirect("/login")
        setAuth(authData)
    },[])

    if(!active)
        return <></>
    return (
        <div className="UserConfig">
            <p className="status sm-text">Đang đăng nhập</p>
            <div className="user-info">
                <div className="avatar">
                    <img src={auth.picture.data.url}></img>
                </div>
                <div className="alt-info">
                    <div className='name'>
                        <p className=" bold-text">{auth.name}</p>
                    </div>
                    <div className='company'>
                        <p className=" reg-text">Cá nhân</p>
                    </div>
                    <div className='email'>
                        <p className="email reg-text">xxxxxxx@gmail.com</p>
                    </div>
                   
                </div>
                <div className="icon-finish">
                    <svg className="gUZ pBj" height="16" width="16" viewBox="0 0 24 24" aria-label="Tùy chọn đã chọn" role="img"><path d="M9.17 21.75.73 12.79c-.97-1.04-.97-2.71 0-3.75a2.403 2.403 0 0 1 3.53 0l4.91 5.22L19.74 3.03c.98-1.04 2.55-1.04 3.53 0 .97 1.03.97 2.71 0 3.74L9.17 21.75z"></path></svg>
                </div>
            </div>


            <div className='account'>
                <p className='sm-text'>Tài khoản của bạn</p>
                <ul className='bold-text'>
                    <li>Thêm tài khoản</li>
                    <li>Chuyển đổi thành tài khoản doanh nghiệp</li>
                </ul>
            </div>

            <div className='more'>
                <p className='sm-text'>Tùy chọn khác</p>
                <ul className='bold-text'>
                    <li>Cài đặt</li>
                    <li>Điều chỉnh bảng tin nhà bạn</li>
                    <li>Cài đặt ứng dụng Windows</li>
                    <li>Nhận trợ giúp</li>
                    <li>Xem điều khoản và quyền riêng tư</li>
                    <li><a href="/login">Đăng xuất</a></li>
                </ul>
            </div>
        </div>
    )
}









const Navbar = (props) => {
    const [text, setText] = useState('')
    const [active, setActive] = useState(false);
    let history = useHistory()
    let {search} = useLocation();
    let {q} = queryString.parse(search);
    
    const onHandleFind = (event) => {
        if(event.charCode == 13){
            setText(event.target.value);   
            history.push(`/search?q=${event.target.value}`);
            props.findImages(20,1,event.target.value);
            window.scrollTo(0, 0)
        }   
    }

    const handleClick = () => {
        setActive(active => !active);
    }

    useEffect(()=> {
        props.findImages(60,1,q);
    },[])


    return (
        <div className="Navbar">
            <UserConfig active={active}/>
            <div className="nav-container">
                <div className="left-nav">
                    <div className="logo">
                        <svg className="gUZ lZJ U9O kVc" height="24" width="24" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img"><path d="M0 12c0 5.123 3.211 9.497 7.73 11.218-.11-.937-.227-2.482.025-3.566.217-.932 1.401-5.938 1.401-5.938s-.357-.715-.357-1.774c0-1.66.962-2.9 2.161-2.9 1.02 0 1.512.765 1.512 1.682 0 1.025-.653 2.557-.99 3.978-.281 1.189.597 2.159 1.769 2.159 2.123 0 3.756-2.239 3.756-5.471 0-2.861-2.056-4.86-4.991-4.86-3.398 0-5.393 2.549-5.393 5.184 0 1.027.395 2.127.889 2.726a.36.36 0 0 1 .083.343c-.091.378-.293 1.189-.332 1.355-.053.218-.173.265-.4.159-1.492-.694-2.424-2.875-2.424-4.627 0-3.769 2.737-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.899 0 4.117-2.595 7.431-6.199 7.431-1.211 0-2.348-.63-2.738-1.373 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12"></path></svg>
                    </div>
                    <div className="home">
                        <Link to="/">Trang chủ</Link>
                    </div>
                </div>
                <div className="search">
                    <input type="text" placeholder="Tìm kiếm" onKeyPress={onHandleFind} ></input>
                    <img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/20/000000/external-search-seo-dreamstale-lineal-dreamstale-7.png"/>
                </div>
                <div className="button-container">
                    <div className="anoun">
                        <svg className="gUZ B9u U9O kVc" height="24" width="24" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img"><path d="M12 24c-1.66 0-3-1.34-3-3h6c0 1.66-1.34 3-3 3zm7-10.83c1.58 1.52 2.67 3.55 3 5.83H2c.33-2.28 1.42-4.31 3-5.83V7c0-3.87 3.13-7 7-7s7 3.13 7 7v6.17z"></path></svg>
                    </div>
                    <div className="message">
                        <svg className="Hn_ gUZ B9u U9O kVc" height="24" width="24" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img"><path d="M18 12.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 18 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 12 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 6 12.5M12 0C5.925 0 1 4.925 1 11c0 2.653.94 5.086 2.504 6.986L2 24l5.336-3.049A10.93 10.93 0 0 0 12 22c6.075 0 11-4.925 11-11S18.075 0 12 0"></path></svg>
                    </div>
                    <div className="info">
                        <img src="https://i.pinimg.com/564x/b4/96/a9/b496a9537226f58abea355c8da21e262.jpg"></img>
                    </div>
                    <div className="drop-more" onClick={handleClick}>
                        <img src="https://img.icons8.com/ios/16/000000/expand-arrow--v2.png"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    images: state.data,
})

export default connect(mapStateToProps,actionCreators)(Navbar)