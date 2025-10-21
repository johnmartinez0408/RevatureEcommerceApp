import {createStore} from 'redux';
import { cartReducer } from './reducers/cartReducer.js';


//Create Store
const store = createStore(cartReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //enable chrome extension to view redux state
);

export default store;