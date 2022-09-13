import { combineReducers } from "redux";
import { LoginReducer } from "./loginReducer";
import { signupReducer } from "./signupReducer";
import { getcitiesReducer } from "./getcitiesReducer";
import { getbookingdetailsReducer} from "./getbookingdetailsReducer";


export const allReducers=combineReducers(
    {
        signupReducer,
        LoginReducer,
        getcitiesReducer,
        getbookingdetailsReducer
    }
)