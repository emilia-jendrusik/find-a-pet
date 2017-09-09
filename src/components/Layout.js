import React, {Component} from "react";
import Header from "./Header";
import Listing from "../containers/Listing";

class Layout extends Component {
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
					<Header />
				</div>
				<div className="petContent">
					<Listing />
				</div>
			</div>
		)
	}
}

export default Layout;