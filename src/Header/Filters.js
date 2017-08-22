import React, {Component} from "react";

class Filters extends Component {
	render(){
		return(
			<ul className="uk-grid" id="Filters">
				<li className="uk-width-1-2">
					<label>Size</label>
					<select>
						<option value="sm">Small</option>
						<option value="md">Medium</option>
						<option value="lg">Large</option>
					</select>
				</li>
				<li className="uk-width-1-2">
					<label>Age</label>
					<select>
						<option value="age0">Puppy</option>
						<option value="age1">Adult</option>
					</select>
				</li>
			</ul>
		)
	}
}
export default Filters;