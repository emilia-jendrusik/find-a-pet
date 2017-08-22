import React, {Component} from "react";
import "./Filters.css";
class Filters extends Component {
	render(){
		return(
			<div className="uk-container">
				<ul className="uk-grid" id="Filters">
					<li className="uk-width-1-2">
						<label htmlFor="petSize">Size</label>
		    			<select className="uk-select uk-form-width-medium" id="petSize" onChange={this.props.onChooseFilter}>
		    					<option value="none">All</option>
		      					<option value="sm">Small</option>
								<option value="md">Medium</option>
								<option value="lg">Large</option>
		    			</select>	
					</li>
					<li className="uk-width-1-2">
						<label htmlFor="petAge">Age</label>
						<select className="uk-select uk-form-width-medium" id="petAge" onChange={this.props.onChooseFilter}>
							<option value="none">All</option>
							<option value="age0">Puppy</option>
							<option value="age1">Adult</option>
						</select>
					</li>
				</ul>
			</div>
		)
	}
}
export default Filters;