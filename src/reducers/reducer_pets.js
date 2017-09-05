import {FETCH_DATA} from '../actions/index';

export default function(state={data:null, term:null}, action) {
	switch (action.type) {
		case FETCH_DATA:
			let dataEl = action.payload.data.petfinder.pets;
			if(dataEl) {
				return {data: dataEl.pet, term: action.meta};
			}
			return {data: null, term: action.meta};
		default: return state
	}
}