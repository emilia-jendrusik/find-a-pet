import React, {Component} from 'react';
import loader from './images/loader.gif';

class Loader extends Component  {
	render() {
		return (
			<div className="loader"><img src={loader} /></div>
		)
	}
}
export default Loader;