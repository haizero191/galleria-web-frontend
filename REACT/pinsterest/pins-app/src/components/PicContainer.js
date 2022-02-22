import React from 'react'
import "./scss/PicContainer.scss"



const PicContainer = (props) => {
    return (
        <div className={`PicContainer ${props.grid}`}>
            {props.children}
        </div>
    )
}

export default React.memo(PicContainer);
