import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPets} from '../actions/index';
import {bindActionCreators} from 'redux';

class SearchForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: ''
		}
		this.getPets = this.getPets.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e) {
		this.setState({term: e.target.value});
	}
	getPets(e) {
		e.preventDefault();
		this.props.fetchPets(this.state.term);
		this.setState({term: ''});
	}
	render(){
		return(
			<div className='uk-navbar-item'>
				<form onSubmit={this.getPets}>
					<input type='text' className='uk-input uk-form-width-large' placeholder='Enter animal type you are looking for (cat, dog, bird)' value={this.state.term} onChange={this.handleChange} />
					<button className='uk-button uk-button-default'>Search</button>
				</form>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchPets: fetchPets}, dispatch);
}
export default connect(null, mapDispatchToProps)(SearchForm);