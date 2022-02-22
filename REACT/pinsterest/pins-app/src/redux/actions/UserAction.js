import Unsplash from "../../api/unsplash/restfulAPI";

export const getUser = (userName) => {
    return async(dispatch) => {   
        const response = await Unsplash.getUser(userName);
        dispatch(setUser(response))
        return response;
    }
}


export const setUser = (user) => {
    return {
        type: "GET_USER",
        payload: user
    }
}


