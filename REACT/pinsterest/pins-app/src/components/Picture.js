import React from 'react'
import "./scss/Picture.scss"
import { useHistory } from 'react-router-dom';
import { showImage } from '../redux/actions/PictureActions';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const Picture = (props) => {
    
    var imageInfo = {};
    imageInfo = props.imageInfo
    let history = useHistory();

    const redirect = (id) => {
        history.push("/pin/?id=" + id);
        showImage(id);
    }


    return (
        <div className="Picture">
            <div className="main-image">
                <div className="image" >
                    <LazyLoadImage 
                        src={imageInfo.urls.regular} 
                        effect="blur"
                        placeholderSrc={imageInfo.urls.regular}
                    />
                </div>

                <div className="hover-container" onClick={() => redirect(imageInfo.id)}>
                    <div className="top-pic">
                        <div className="left-t-pic">
                            <span>Hồ sơ</span>
                            <img src="https://img.icons8.com/ios-filled/18/FFFFFF/expand-arrow.png"/>
                        </div>
                        <div className="save-btn">
                            Lưu
                        </div>
                    </div>
                    <div className="bottom-pic">
                            <div className="btn-link-to">
                                <img src="https://img.icons8.com/ios/14/000000/right3.png"/>
                                <span>{imageInfo.user.username}</span>
                            </div>
                            <div className="btn-action">
                                <div className="rounded btn-bt-pic">
                                    <img src="https://img.icons8.com/pastel-glyph/24/000000/upload.png"/>
                                </div>
                                <div className="rounded btn-bt-pic">
                                    <img src="https://img.icons8.com/material-rounded/24/000000/more.png"/>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
           
           <div className="about-pic">
               <div className="name-pic">
                   <span>{imageInfo.alt_description}</span>
               </div>
           </div>
        </div>
    )
}

export default React.memo(Picture);
