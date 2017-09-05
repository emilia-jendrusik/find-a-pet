import axios from 'axios';
const API_KEY = '78fad329a129c9c9445323a0877c0b84';
const ROOT_URL = `http://api.petfinder.com/pet.find?format=json&key=${API_KEY}&location=10008&animal=`;
export const FETCH_DATA = 'FETCH_DATA';

export function fetchPets(term) {
	const url = `${ROOT_URL}${term}`;
	const data = axios.get(url);
	return {
		type: FETCH_DATA,
		payload: data
	}
}