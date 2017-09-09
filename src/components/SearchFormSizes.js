import React from 'react';

const SearchFormSizes = () => {
	return (
		<select className='uk-select uk-form-width-medium'>
			<option value=''>All sizes</option>
			<option value='S'>Small</option>
			<option value='M'>Medium</option>
			<option value='L'>Large</option>
			<option value='XL'>Extra large</option>
		</select>
	)
}

export default SearchFormSizes;