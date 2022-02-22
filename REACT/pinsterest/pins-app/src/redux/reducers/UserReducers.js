
const initialState = {

}

const UserReducers = (state = initialState, action) => {
    switch(action.type) {
        case "GET_USER" : { 
            return action.payload;
        }
        default: return state;
    }
}

export default UserReducers;