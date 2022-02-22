import {loadImages, findImages, showImage} from "./PictureActions";
import {getUser} from "./UserAction";

const combineAction = {loadImages, findImages, showImage, getUser}

export default combineAction;