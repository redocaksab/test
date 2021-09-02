import { createStore, combineReducers } from "redux";
import qANDaReducer from "./qanda-reducer";
import {reducer as formReducer} from "redux-form";

let reducers = combineReducers({
    qANDa: qANDaReducer,
    form: formReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;