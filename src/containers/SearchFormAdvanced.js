import React, {Component} from 'react';
import SearchFormSizes from '../components/SearchFormSizes';
import SearchFormAges from '../components/SearchFormAges';
import SearchFormSexes from '../components/SearchFormSexes';

class SearchFormAdvanced extends Component {
	render() {
		return (
			<div className='uk-width-1 uk-text-right link-container'>
				<div className='uk-width-1'> 
					<SearchFormSizes onChange={this.props.onChange} value={this.props.size} />
					<SearchFormAges onChange={this.props.onChange} value={this.props.age} />
					<SearchFormSexes onChange={this.props.onChange} value={this.props.sex} />
				</div>
			</div>
		)
	}
}

export default SearchFormAdvanced;