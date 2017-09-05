import {combineReducers} from 'redux';
import PetsReducer from './reducer_pets';

const rootReducer = combineReducers({
	petsState: PetsReducer
});

export default rootReducer;