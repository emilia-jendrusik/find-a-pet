import React, {Component} from "react";
import _ from 'lodash';
import ListItem from "./ListItem";
import {connect} from 'react-redux';

class Listing extends Component {
	render() {
		let mappedPets;
		if(this.props.petsState) {
			mappedPets = this.props.petsState.map(function(pet) {
				console.log(pet);
				let descr= pet.description.$t.trim();
				let truncdescription = _.truncate(descr, {'length': 100,'separator': ' '});
				return <ListItem name={pet.name.$t} type={pet.animal.$t} descr={truncdescription} shelter={pet.shelterId.$t} id={pet.id.$t} key={"pet_" + pet.id.$t} img={pet.media.photos.photo[3].$t} />
			});
		} else {
			mappedPets = <div>Search for initial data</div>
		}
		return (
				<div className="uk-container uk-container-center uk-margin-top uk-margin-large-bottom">
					<div className="uk-grid pet-grid">
						{mappedPets}
					</div>
				</div>
			)
	}
}

function mapStateToProps(state) {
	return {petsState: state.petsState}
}
export default connect(mapStateToProps)(Listing);