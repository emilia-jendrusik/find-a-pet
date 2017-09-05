import React, {Component} from "react";

class SearchForm extends Component {
	render(){
		return(
			<div className="uk-navbar-item">
				<form action="javascript:void(0)">
					<input type="text" className="uk-input uk-form-width-large" placeholder="Search pet" />
					<button className="uk-button uk-button-default">Search</button>
				</form>
			</div>
		)
	}
}
export default SearchForm;