import axios from 'axios';
const API_KEY = '78fad329a129c9c9445323a0877c0b84';
const ROOT_URL = 'http://api.petfinder.com/';
const ROOT_KEY = `?format=json&key=${API_KEY}`;
export const COUNT = 24;
export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_BREEDS = 'FETCH_BREEDS';

export function fetchPets(term,termText,breed,offset,size,age,sex,prevData) {
	prevData = prevData || 0;
	size = size || '';
	age = age || '';
	sex = sex || '';
	const url = `${ROOT_URL}pet.find${ROOT_KEY}&count=${COUNT}&location=10008&animal=${term}&breed=${breed}&size=${size}&age=${age}&sex=${sex}&offset=${offset}`;
	const data = axios.get(url);
	return {
		type: FETCH_DATA,
		payload: data,
		meta: {term: term, termText: termText, breed: breed, prevData: prevData}
	}
}

export function fetchPetsBreeds(term) {
	const url = `${ROOT_URL}breed.list${ROOT_KEY}&animal=${term}`;
	const data = axios.get(url);
	return {
		type: FETCH_BREEDS,
		payload: data
	}
}