import React, { useState } from 'react'
import load from "./assets/load-icon.gif";
import "./scss/Load.scss";

const Load = () => {
    const [isLoad, setIsLoad] = useState(false);



    const loading = () => {
        setIsLoad(true)
        return 
    };
    return (
        <div className="Load">
            <img 
            src={load}
            onLoad={loading}
            />
            <p>Chờ một chút để chúng tôi tải xuống những ý tưởng của bạn</p>
        </div>
    )
}

export default Load
