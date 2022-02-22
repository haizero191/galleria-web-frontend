import Unsplash from "../../api/unsplash/restfulAPI";

export const loadImages = () => {  
    return async(dispatch) => {
        const response = await Unsplash.get(20,1,"Cat");
        dispatch(setStoreImages(response))
    }
}  

export const findImages = (perPage,page,text) => {  
    return async(dispatch) => { 
        const response = await Unsplash.get(perPage,page,text);
        dispatch(setStoreImages(response))
    }
}  

export const showImage = (id) => {
    return async(dispatch) => {
        const response = await Unsplash.getOneImage(id);
        return response;
    }
}


export const getImage = (text)  => {
    return {
        type: "GET_IMAGE",
        payload: text
    }
}


export const setStoreImages = (images) => {
    return {
        type: "SET_STATE_IMAGES",
        payload: images    
    }
}
