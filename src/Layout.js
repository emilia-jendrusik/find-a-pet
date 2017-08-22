import React, {Component} from "react";
import Header from "./Header/Header";
import Listing from "./Listing/Listing";

class Layout extends Component {
	constructor(props) {
		super(props);
		this.state = {petType : "none"};
		this.chooseFilter = this.chooseFilter.bind(this);
	}
	componentDidMount() {
		setTimeout(function(){ 
			document.getElementById('bodyContent').classList.remove("hidden");
			document.getElementById('loadingContent').classList.add("hidden");
		}, 100);
	}
	chooseFilter(e) {
		var newPetType = e.target.getAttribute('data-filter');
		this.setState({petType : newPetType});
	}
	render() {
		return (
			<div>
				<div id="mainElem">
					<Header onChooseFilter={this.chooseFilter} />
				</div>
				<div className="petContent">
					<Listing petsData={this.props.petsData} petType={this.state.petType}/>
				</div>
			</div>
		)
	}
}

export default Layout;