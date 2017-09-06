import React, {Component} from 'react';

class ListItem extends Component {
	render() {
		return (
			<div className='uk-width-1-2 pet-el' data-type={this.props.type}>
				<div className='uk-grid'>
					<div className='uk-width-1-2'>
						<span className='pet-type'>{this.props.type}</span>
						<h1>{this.props.name}</h1>
						<h2 className='uk-margin-top'>{this.props.breed}</h2>
						<span className='uk-margin-right'>ID: {this.props.id}</span>
						<span>Shelter: {this.props.shelter}</span>
						{this.props.descr && <p>Description: {this.props.descr}</p>}
						<div>
							<a className='uk-button uk-button-default'>Details</a>
							<i className='like-pet'>&#10084;</i>
							<i className='contact-pet'>&#9993;</i>
						</div>
					</div>
					<div className='uk-width-1-2 image-container'>
						<img src={this.props.img} alt={this.props.name} />
					</div>
				</div>
			</div>
		)
	}
}
export default ListItem;