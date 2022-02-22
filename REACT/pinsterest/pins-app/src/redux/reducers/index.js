import { combineReducers } from "redux";

import PictureReducers from "./PictureReducers";
import UserReducers from "./UserReducers";


export const allReducers = combineReducers({
    images: PictureReducers,
    user: UserReducers
});

