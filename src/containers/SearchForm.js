import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPets} from '../actions';
import {fetchPetsBreeds} from '../actions';
import {bindActionCreators} from 'redux';
import SearchFormAdvanced from './SearchFormAdvanced';
import SearchFormTypes from '../components/SearchFormTypes';

class SearchForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: 'barnyard',
			termText: 'Barnyard animals',
			breed: '',
			age: '',
			size: '',
			sex: '',
			advancedForm: false
		}
		this.props.fetchPetsBreeds(this.state.term);
		this.getPets = this.getPets.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.breedsSelect = this.breedsSelect.bind(this);
		this.handleSelectChange = this.handleSelectChange.bind(this);
		this.handleAdvancedClick = this.handleAdvancedClick.bind(this);
	}
	handleChange(e) {
		const etar = e.target;
		const termText = etar.options[etar.selectedIndex].getAttribute('data-text');
		this.setState({term: etar.value, termText: termText});
		this.setState({breed:''});
		this.props.fetchPetsBreeds(etar.value);
	}
	handleSelectChange(e) {
		this.setState({[e.target.getAttribute('data-handle-change')]: e.target.value});
	}
	getPets(e) {
		const tState = this.state;
		e.preventDefault();
		this.props.fetchPets(tState.term,tState.termText,tState.breed,0, tState.size, tState.age, tState.sex);
	}
	breedsSelect() {
		return this.props.breeds.map(breed => {
			return <option value={breed.$t} key={breed.$t}>{breed.$t}</option>
		})
	}
	handleAdvancedClick(e) {
		let isAdvanced = this.state.advancedForm; 
		e.target.innerHTML = this.state.advancedForm ? 'More filters': 'Hide filters';
		if(!isAdvanced) {
			this.setState({advancedForm: !isAdvanced});
		} else {
			this.setState({
				advancedForm: !isAdvanced,
				age: '',
				size: '',
				sex: ''
			})
		}
	}
	render(){
		console.log(this.state);
		return(
			<div className='uk-navbar-item filter-item'>
				<form className='uk-form' onSubmit={this.getPets}>
					<SearchFormTypes value={this.state.term} onChange={this.handleChange} />
					{this.props.breeds.length && <select className='uk-select uk-form-width-medium' value={this.state.breed} data-handle-change='breed' onChange={this.handleSelectChange}>
						<option value=''>All breeds</option>
						{this.breedsSelect()}
					</select>}
					<button className='uk-button uk-button-default'>Search</button>
					<a className='uk-link' onClick={this.handleAdvancedClick}>More filters</a>
					{this.state.advancedForm && <SearchFormAdvanced onChange={this.handleSelectChange} sex={this.state.sex} age={this.state.age} size={this.state.size} />}
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