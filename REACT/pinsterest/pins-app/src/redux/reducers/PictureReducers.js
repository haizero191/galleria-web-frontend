var  initialState = []

const PictureReducers = (state = initialState, action) => {
    switch(action.type) {
        case "GET_IMAGE": {
            return state;
        }
        case "SET_STATE_IMAGES" : { 
            return action.payload;
        }
        default: return state;
    }
}

export default PictureReducers;