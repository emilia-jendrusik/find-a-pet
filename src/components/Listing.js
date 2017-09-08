import React, {Component} from 'react';
import _ from 'lodash';
import ListItem from './ListItem';
import {connect} from 'react-redux';
import {COUNT, fetchPets} from '../actions';
import {bindActionCreators} from 'redux';
import emptyimage from '../images/empty.png';

class Listing extends Component {
	constructor(props) {
		super(props);
		this.morePets = this.morePets.bind(this);
	}
	morePets(petsProp) {
		this.props.fetchPets(petsProp.term, petsProp.termText, petsProp.breed, parseInt(petsProp.newPage) , petsProp.data);
	}
	render() {
		let mappedPets;
		let petsProp = this.props.petsState;
		let shouldMoreButtonAppear = !_.isEmpty(petsProp.term)  && petsProp.data.length >= COUNT;
		if(petsProp.data) {
			mappedPets = petsProp.data.map(function(pet, i) {
				let descr = _.isEmpty(pet.description) ? '' : pet.description.$t.trim();
				let truncdescription = _.truncate(descr, {'length': 100,'separator': ' '});
				return <ListItem name={pet.name.$t} type={pet.animal.$t} descr={truncdescription} shelter={pet.contact.city.$t} id={pet.id.$t} key={i}  img={pet.media.photos? pet.media.photos.photo[3].$t : emptyimage} />
			});
		} else {
			mappedPets = <p className='uk-width-1 uk-text-center'>No search results</p>
		}
		return (
			<div className='uk-container uk-container-center uk-margin-top uk-margin-large-bottom'>
				{petsProp.term && <h2 className='uk-text-center'>Search results for <b>{petsProp.termText}</b></h2>}
				<div className='uk-grid pet-grid'>
					{mappedPets}
				</div>
				{shouldMoreButtonAppear && <div className='uk-width-1 uk-text-center'><button className='uk-button uk-button-primary' id='morePets' onClick={() => this.morePets(petsProp)}>More pets</button></div>}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {petsState: state.petsState}
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchPets: fetchPets}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Listing);