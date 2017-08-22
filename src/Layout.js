import React, {Component} from "react";
import Header from "./Header/Header";
import Listing from "./Listing/Listing";

class Layout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			petType : "none",
			petSize : "none",
			petAge : "none"
		};
		this.chooseType = this.chooseType.bind(this);
	}
	componentDidMount() {
		setTimeout(function(){ 
			document.getElementById('bodyContent').classList.remove("hidden");
			document.getElementById('loadingContent').classList.add("hidden");
		}, 100);
	}
	chooseType(e) {
		let newPetType = e.target.getAttribute('data-filter');
		this.setState({petType : newPetType});
	}
	chooseFilter(e) {
		let newPetFilter = e.target.value;
		let typeOfFilter = e.target.getAttribute('id');
		console.log(typeOfFilter);
		this.setState({[typeOfFilter] : newPetFilter });
	}
	render() {
		return (
			<div>
				<div id="mainElem">
					<Header onChooseType={this.chooseType} onChooseFilter={this.chooseFilter} />
				</div>
				<div className="petContent">
					<Listing petsData={this.props.petsData} petType={this.state.petType} petSize={this.state.petSize} petAge={this.state.petAge}/>
				</div>
			</div>
		)
	}
}

export default Layout;