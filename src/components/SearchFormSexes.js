import React from 'react';

const SearchFormSexes = (props) => {
	return (
		<select className='uk-select uk-form-width-medium' data-handle-change='sex' onChange={props.onChange}>
			<option value=''>Both sexes</option>
			<option value='F'>Female</option>
			<option value='M'>Male</option>
		</select>
	)
}

export default SearchFormSexes;