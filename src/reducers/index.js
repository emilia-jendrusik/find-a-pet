import {combineReducers} from 'redux';
import PetsReducer from './reducer_pets';
import BreedsReducer from './reducer_breeds';

const rootReducer = combineReducers({
	petsState: PetsReducer,
	breeds: BreedsReducer
});

export default rootReducer;