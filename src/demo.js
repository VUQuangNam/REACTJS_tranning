import { createStore } from 'redux';
import { status } from './action/index';
import myReducer from './reducers/index';

const store = createStore(myReducer);

store.dispatch(status());