import React,{ useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from "../../redux/actions/index";
import { useLocation } from 'react-router-dom';
import queryString from "query-string";
import  Load  from '../Load';
import Feedback from '../Feedback';
import "../scss/Pin.scss";


const Pin = (props) => {
    const [state, setState] = useState({
        user: {
            profile_image:{}
        },
        urls: {}
    })

    let {search} = useLocation();
    let {id} = queryString.parse(search);
    useEffect(() => {
        props.showImage(id).then(res => {
            setState(res.data)
            console.log(res.data)
        });
        return () => {

        }  
    },[props])

    return (
        state === {} ? <Load/>:
        <div className="Pin">
            <div className="wrapper">
                <div className="main-image">
                    <img src={state.urls.regular}/>
                </div>
                <div className="info-image">
                    <div className="top-info">
                        <div className="btn-action-left">
                            <div className="btn-icon rounded">
                                <img src="https://img.icons8.com/ios-glyphs/30/000000/ellipsis.png"/>
                            </div>
                            <div className="btn-icon rounded">
                            <img src="https://img.icons8.com/material-rounded/24/000000/upload-2.png"/>
                            </div>
                        </div>
                        <div className="btn-action-right">
                            <div className="info">
                                <span>Hồ sơ</span>
                                <img src="https://img.icons8.com/ios-glyphs/26/000000/expand-arrow--v1.png"/>
                            </div>
                            <div className="save-btn">
                                Lưu
                            </div>
                        </div>
                    </div>
                    <div className="content-info">
                        <div className="from-link">
                           <a>{state.user === {} ? "cak": state.user.name}</a>
                        </div>
                        <div className="name-image">
                            <h4>{state.alt_description}</h4>
                            <p>{state.description}</p>
                        </div>
                        <div className="user">
                            <div className="info-user">
                                <div className="avatar">
                                    <img src={state.user.profile_image.medium}/>
                                </div>
                                <div className="info-alt">
                                    <h5>{state.user.name}</h5>
                                    <div>follow</div>
                                </div>
                            </div>
                            <div className="follow-btn">
                                <p>Theo dõi</p>
                            </div>
                        </div>

                        <Feedback avatar={state.user.profile_image.medium}/>
                    </div>
                    <div className="bottom-info"></div>
                </div>
            </div>

            <div className="relate-to">

            </div>
        </div>
        
    )
}


const mapStateToProps = (state, ownProps) => ({
    data: state,
})


export default connect(mapStateToProps,actionCreators.default)(React.memo(Pin));
