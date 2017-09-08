import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPets} from '../actions';
import {fetchPetsBreeds} from '../actions';
import {bindActionCreators} from 'redux';

class SearchForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: 'barnyard'
		}
		this.props.fetchPetsBreeds(this.state.term);
		this.getPets = this.getPets.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.breedsSelect = this.breedsSelect.bind(this);
	}
	handleChange(e) {
		this.setState({term: e.target.value});
		this.props.fetchPetsBreeds(e.target.value);
	}
	getPets(e) {
		e.preventDefault();
		this.props.fetchPets(this.state.term,0);
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
						<option value='barnyard'>Barnyard animals</option>
						<option value='bird'>Birds</option>
						<option value='cat'>Cats</option>
						<option value='dog'>Dogs</option>
						<option value='horse'>Horses</option>
						<option value='reptile'>Reptiles</option>
						<option value='smallfurry'>Small & furry</option>
					</select>
					{this.props.breeds.length && <select className='uk-select uk-form-width-medium'>
						{this.breedsSelect()}
					</select>}
					<button className='uk-button uk-button-default'>Search</button>
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