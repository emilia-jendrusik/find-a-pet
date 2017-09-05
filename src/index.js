import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import './uikit.min.css';
import './index.css';
import Loader from './components/Loader';
import Layout from './components/Layout';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(<Loader />, document.getElementById('loadingContent'));
ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<Layout />
	</Provider>
, document.getElementById('bodyContent'));
