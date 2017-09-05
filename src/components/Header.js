import React, {Component} from "react";
import NavBar from "./Navbar";
import SearchForm from "./SearchForm";


class Header extends Component {
	render() {
		return (
			<div id="headerContent">
				<nav data-reactroot="" className="uk-navbar-container">
					<NavBar onChooseType={this.props.onChooseType} />
					<SearchForm />
				</nav>
			</div>
		)
	}
}

export default Header;