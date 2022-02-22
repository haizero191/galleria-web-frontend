import React, { useState, useEffect } from 'react'
import ReviewNavbar from '../ReviewNavbar'
import PicList from '../PicList'
import "../scss/ReviewHome.scss";
import LoginForm from '../LoginForm';


const ReviewHome = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(active => !active)
    }

    useEffect(() => {
        let navbar = document.querySelector(".Navbar");
        navbar.style.display = "none";
        let body = document.querySelector("body");
        body.style.overflow = "hidden";
        return () => {
            navbar = null;
            body = null;
        }
    }, [])

    


    return (
        <div className="ReviewHome">
            <div className='top' id="top" style={{backgroundColor: "red", marginTop: ""}}></div>
            <ReviewNavbar click={handleClick}/>
            <div className={`wrapper`}>
                <PicList grid="down-grid"/>
                <div className='slider-title'>
                    <p>Xem ý tưởng tiếp theo</p>
                    <p>Các món ăn ngon</p>
                </div>
                <div className={`blur-white-bottom ${active? "hidden" : "show"}`}>
                    <GoToBottom click={handleClick} />
                </div>
                {
                    active?
                        <div className='content-login '>
                             <GoToTop click={handleClick}/>
                             <LoginForm/>
                             <div className='title-content'>
                                 <h2>Đăng kí để nhận thêm ý tưởng</h2>
                             </div>
                        </div>:
                    <div></div>
                }
                <div className='bottom' id="bottom"  style={{backgroundColor: "red", marginTop: "100px"}}></div>
            </div>
        </div>
    )
}

const GoToBottom = (props) => {
    const onHanldeChild = () => {
        props.click();
    }
    
    return (
        <div className='GoToBottom' onClick={onHanldeChild}>
        <a href='#bottom'>
                <div className='container-icon'>
                    <img src="https://img.icons8.com/ios-glyphs/32/FFFFFF/expand-arrow--v1.png"/> 
                </div>
            </a>
        </div>
    )
}

const GoToTop = (props) => {
    const onHanldeChild = () => {
        props.click();
        
    }
    return (
        <div className='GoToTop' onClick={onHanldeChild}>
            <a href='#top'>
                <div className='container-icon'>
                    <img src="https://img.icons8.com/ios-glyphs/32/FFFFFF/expand-arrow--v1.png" />
                </div>
            </a>
        </div>
    )
}


export default ReviewHome
