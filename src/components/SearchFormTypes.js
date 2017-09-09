import React, {Components} from 'react';

const SearchFormTypes = (props) => {
	return (
		<select className='uk-select uk-form-width-medium' value={props.value} onChange={props.onChange}>
			<option value='barnyard' data-text='Barnyard animals'>Barnyard animals</option>
			<option value='bird' data-text='Birds'>Birds</option>
			<option value='cat' data-text='Cats'>Cats</option>
			<option value='dog' data-text='Dogs'>Dogs</option>
			<option value='horse' data-text='Horses'>Horses</option>
			<option value='reptile' data-text='Reptiles'>Reptiles</option>
			<option value='smallfurry' data-text='Small animals'>Small animals</option>
		</select>
	)
}

export default SearchFormTypes;
