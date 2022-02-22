import React, {useState, useEffect} from 'react';
import "./scss/PicList.scss";
import  Picture  from './Picture';
import  PicContainer  from './PicContainer';
import { connect } from 'react-redux';
import * as actionCreators from "../redux/actions/PictureActions";
import InfiniteScroll from 'react-infinite-scroll-component';
import {useLocation} from "react-router-dom";
import queryString from "query-string";
import Load from "./Load"

const PicList = (props) => {
    const [images, setImages] = useState([[],[],[],[],[],[]]);
    const [page, setPage] = useState(2);
    const [query, setQuery] = useState("");
    let {search} = useLocation();
    let {q} = queryString.parse(search);
    
    useEffect(() => {       
        if(q !== query){  
            setImages([[],[],[],[],[],[]]);  
        }   
        setQuery(q);
    },[q])

    useEffect(() => {   
        if(props.images.length === 0)
            props.findImages(50,page,q?q:"random");
        var timer = setTimeout(() => {
            handleState(props.images)
        },  1500)  
        return () => {
            clearTimeout(timer)
        }
    },[props.images]) 

    useEffect(() => {
        window.scrollTo(0, 0);
        var body = document.querySelector('body');
        body.style.overflow = "auto auto";
        return () => {
            body = null
        }
    },[])
    const onLoadImage = () => {
        props.findImages(50,page,q?q:"");
        setPage(page => page + 1);   
    }
    const handleState = (arr) => {
        if(arr.length == 0)
            return;
        var newArr = images;
        var count = 0;
        for(let i = 0; i < arr.length; i++) {
            if(count === images.length) {
                count = 0;
            }
            newArr[count].push(arr[i]);
            count++;
        }  
        setImages([...newArr])
    }
    


    return (
        <div className="PicList">    
            <InfiniteScroll dataLength = {images.flat().length} next={onLoadImage} hasMore={true} loader={<Load/>}>
                <PicContainer grid={props.grid}>
                    {
                        images.map((image,index) => {
                            return <div key={index} className="column">
                                {
                                    image.map(x => {
                                        if(x !== undefined)
                                            return <Picture key={x.id} imageInfo={x} />
                                        else 
                                            return ""
                                    })
                                }
                            </div>
                        })
                    }
                </PicContainer>
            </InfiniteScroll>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    images: state.images,
})



export default connect(mapStateToProps,actionCreators)(React.memo(PicList));
