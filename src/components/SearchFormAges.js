import React from 'react';

const SearchFormAges = () => {
	return (
		<select className='uk-select uk-form-width-medium'>
			<option value=''>All ages</option>
			<option value='baby'>Baby</option>
			<option value='young'>Young</option>
			<option value='adult'>Adult</option>
			<option value='senior'>Senior</option>
		</select>
	)
}

export default SearchFormAges;