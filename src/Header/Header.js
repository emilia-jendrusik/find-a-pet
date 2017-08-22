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
					<NavBar onChooseType={this.props.onChooseType} />
					<SearchForm />
					<Filters onChooseFilter={this.props.onChooseFilter}/>
				</nav>
			</div>
		)
	}
}

export default Header;