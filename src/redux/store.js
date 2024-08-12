import { createStore } from 'redux';
import rootReducer from './reducer'; // Assuming you have multiple reducers combined in a root reducer

const store = createStore(rootReducer);

export default store;
