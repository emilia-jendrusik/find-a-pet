import React, {Component} from "react";
import NavBar from "./Navbar";
import SearchForm from "../containers/SearchForm";


class Header extends Component {
	render() {
		return (
			<div id="headerContent">
				<nav data-reactroot="" className="uk-navbar-container">
					<NavBar />
					<SearchForm />
				</nav>
			</div>
		)
	}
}

export default Header;