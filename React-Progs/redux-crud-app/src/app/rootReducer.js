import { combineReducers } from "redux";
import userReducer from "../features/userReducer";
import contactReducer from "../features/contactReducer";

const rootReducer=combineReducers({

    userReducer:userReducer,
    contactReducer:contactReducer
})

export default rootReducer;