import { createStore, applyMiddleware } from "redux";
import rootReducers from "./reducers/rootReducers";
import { composeWithDevTools } from "redux-devtools-extension"; //Este se borra para produccion
import thunk from "redux-thunk";

//const store = createStore(rootReducers, applyMiddleware(thunk)); //sin el composeWithDevTools 

const store = createStore(rootReducers, composeWithDevTools(
    applyMiddleware(thunk)
));

export default store;