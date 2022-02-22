import React, { useState } from 'react'
import "./scss/Feedback.scss";



const Feedback = ({avatar}) => {
    const [active, setActive] = useState(false)

    const onCollapse = () => {
        setActive(active => !active);
    }

    return (
        <div className='Feedback'>
            <div className="btn-collapse-feedback">
                <span>Nhận xét</span>
                <div className={`collapse-icon ${active ? "rotate" : ""}`} onClick={onCollapse}>
                    <img src="https://img.icons8.com/material-rounded/24/000000/chevron-down.png"/>
                </div>
            </div>
            <div className={`content-feedback ${active ? "active" : ""}`}>
                <p>Chia sẻ phản hồi, đặt câu hỏi hoặc để lại cảm nghĩ</p>
                <div className="text">
                    <div className="avatar">
                        <img src={avatar}></img>
                    </div>
                    <div className="text-container">
                        <input placeholder="Thêm nhận xét"/>
                    </div>
                </div>
                <div className="submit-feedback">
                    <button className="btn cancer">Hủy</button>
                    <button className="btn submit">Đã xong</button>
                </div>
            </div>
        </div>
    )
}
export default Feedback;