import React, {Component} from "react";
import Header from "./Header";
import Listing from "./Listing";

class Layout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			petType : "none",
			petSize : "none",
			petAge : "none",
		};
	}
	componentDidMount() {
		setTimeout(function(){ 
			document.getElementById('bodyContent').classList.remove("hidden");
			document.getElementById('loadingContent').classList.add("hidden");
		}, 100);
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