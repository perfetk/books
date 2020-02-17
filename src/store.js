import { createStore } from 'redux'
import rootReducer from './Redux/index';

const store = createStore(rootReducer);
console.log(store);

export default store;