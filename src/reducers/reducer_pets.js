import {FETCH_DATA} from '../actions/index';

export default function(state={data:[], term:null}, action) {
	switch (action.type) {
		case FETCH_DATA:
			let dataEl = action.payload.data.petfinder;
			if(dataEl.pets) {
				let newPage = dataEl.lastOffset.$t;
				let finalData = action.meta.prevData !== 0 ? action.meta.prevData.concat(dataEl.pets.pet) : dataEl.pets.pet
				return {data: finalData, term: action.meta.term, newPage: newPage};
			}
			return {data: null, term: action.meta.term};
		default: 
			return state
	}
}