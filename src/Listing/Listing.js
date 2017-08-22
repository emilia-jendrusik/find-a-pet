import React, {Component} from "react";
import ListItem from "./ListItem";
import "./Listing.css";
class Listing extends Component {
	constructor(props) {
		super(props);
		this.state = {
			updatedFilter : "petType"
		}
	}
	shouldComponentUpdate(nextProps, nextState) {
    	if (this.props.petType !== nextProps.petType) {
    		this.setState({updatedFilter: "petType"});
	      	return true;
	    }
	    if (this.props.petSize !== nextProps.petSize) {
	    	this.setState({updatedFilter: "petSize"});
	      return true;
	    } 
	    if (this.props.petAge !== nextProps.petAge) {
	    	this.setState({updatedFilter: "petAge"});
	      return true;
	    } 
    	return false;
  	}
	render() {
		//Filter by Type
		console.log("rerender");
		let filterName = this.state.updatedFilter;
		let filterType = this.props[filterName];
		let filteredPets;
		if (filterType == "none") {
			filteredPets = this.props.petsData;
		} else {
			filteredPets = this.props.petsData.filter(function(pet) {
		    	return pet[filterName] == filterType;
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