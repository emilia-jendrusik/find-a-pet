import React, {Component} from 'react';
import logo from '../images/logo.png';
class NavBar extends Component {
	render() {
		return (
			<div className='uk-navbar-item header-item'>
				<a className='uk-navbar-item uk-logo'><img src={logo} alt='Find a pet' /></a>
				<ul className='uk-navbar-nav'>
					<li className='uk-parent'><a data-filter='none'>All</a></li>
					<li className='uk-parent'><a data-filter='Dog'>Dogs</a></li>
					<li className='uk-parent'><a data-filter='Cat'>Cats</a></li>
				</ul>
			</div>
		)
	}
}
export default NavBar;