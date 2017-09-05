import {FETCH_DATA} from '../actions/index';

export default function(state=null, action) {
	switch (action.type) {
		case FETCH_DATA:
			let data = action.payload.data.petfinder.pets;
			if(data) {
				return data.pet;
			}
			return state;
		default: return state
	}
}