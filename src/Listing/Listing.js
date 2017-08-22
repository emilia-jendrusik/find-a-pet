import React, {Component} from "react";
import ListItem from "./ListItem";
import "./Listing.css";
class Listing extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let filterType = this.props.petType;
		let filteredPets;
		if (filterType == "none") {
			filteredPets = this.props.petsData;
		} else {
			filteredPets = this.props.petsData.filter(function(pet) {
		    	return pet.type == filterType;
		 	}).map(function(pet) { return pet });
		}
		let mappedPets  = filteredPets.map(function(pet) {
			return <ListItem name={pet.name} type={pet.type} descr={pet.descr} shelter={pet.shelter} id={pet.id} key={"pet_" + pet.id} />;
		})
		return (
			<div className="uk-container uk-container-center uk-margin-top uk-margin-large-bottom">
				<div className="uk-grid pet-grid">
					{mappedPets}
				</div>
			</div>
		)
	}
}
export default Listing;