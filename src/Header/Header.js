import React, {Component} from "react";
import NavBar from "./Navbar";
import SearchForm from "./SearchForm";
import Filters from "./Filters";
import "./Header.css";

class Header extends Component {
	render() {
		return (
			<div id="headerContent">
				<nav data-reactroot="" className="uk-navbar-container">
					<NavBar onChooseFilter={this.props.onChooseFilter} />
					<SearchForm />
					<Filters />
				</nav>
			</div>
		)
	}
}

export default Header;