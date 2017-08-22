import React, {Component} from "react";
import logo from '../images/logo.png';
class NavBar extends Component {
	render() {
		return (
			<div className="uk-navbar-item header-item">
				<a href="" className="uk-navbar-item uk-logo"><img src={logo} /></a>
				<ul className="uk-navbar-nav">
					<li className="uk-parent"><a href="#" data-filter="none" onClick={this.props.onChooseFilter}>All</a></li>
					<li className="uk-parent"><a href="#" data-filter="Dog" onClick={this.props.onChooseFilter}>Dogs</a></li>
					<li className="uk-parent"><a href="#" data-filter="Cat" onClick={this.props.onChooseFilter}>Cats</a></li>
				</ul>
			</div>
		)
	}
}
export default NavBar;