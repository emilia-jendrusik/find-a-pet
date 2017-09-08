import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPets} from '../actions';
import {fetchPetsBreeds} from '../actions';
import {bindActionCreators} from 'redux';

class SearchForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: 'barnyard',
			termText: 'Barnyard animals',
			breed: ''
		}
		this.props.fetchPetsBreeds(this.state.term);
		this.getPets = this.getPets.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.breedsSelect = this.breedsSelect.bind(this);
		this.handleSelectChange = this.handleSelectChange.bind(this);
	}
	handleChange(e) {
		const etar = e.target;
		const termText = etar.options[etar.selectedIndex].getAttribute('data-text');
		this.setState({term: etar.value, termText: termText});
		this.setState({breed:''});
		this.props.fetchPetsBreeds(etar.value);
	}
	handleSelectChange(e) {
		this.setState({breed: e.target.value});
	}
	getPets(e) {
		const tState = this.state;
		e.preventDefault();
		this.props.fetchPets(tState.term,tState.termText,tState.breed,0);
	}
	breedsSelect() {
		return this.props.breeds.map(breed => {
			return <option value={breed.$t} key={breed.$t}>{breed.$t}</option>
		})
	}
	render(){
		return(
			<div className='uk-navbar-item'>
				<form className='uk-form' onSubmit={this.getPets}>
					<select className='uk-select uk-form-width-medium' value={this.state.term} onChange={this.handleChange}>
						<option value='barnyard' data-text='Barnyard animals'>Barnyard animals</option>
						<option value='bird' data-text='Birds'>Birds</option>
						<option value='cat' data-text='Cats'>Cats</option>
						<option value='dog' data-text='Dogs'>Dogs</option>
						<option value='horse' data-text='Horses'>Horses</option>
						<option value='reptile' data-text='Reptiles'>Reptiles</option>
						<option value='smallfurry' data-text='Small animals'>Small animals</option>
					</select>
					{this.props.breeds.length && <select className='uk-select uk-form-width-medium' value={this.state.breed} onChange={this.handleSelectChange}>
						<option value=''>All</option>
						{this.breedsSelect()}
					</select>}
					<button className='uk-button uk-button-default'>Search</button>
					<div className='uk-width-1 uk-text-right link-container'>
						<a className='uk-link'>More filters</a>
					</div>
				</form>
			</div>
		)
	}
}
function mapStateToprops(state) {
	return {breeds: state.breeds}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchPets: fetchPets, fetchPetsBreeds: fetchPetsBreeds}, dispatch);
}
export default connect(mapStateToprops, mapDispatchToProps)(SearchForm);