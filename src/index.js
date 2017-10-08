import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/store';
import { getCountries} from './actions/actions-countries';
import DevTools from './DevTools';
import { Router, hashHistory } from 'react-router';
import routes from './routes';


render(
	<div>
    	<Provider store={store}>
        	<div>
        	<DevTools />
        		<Router history={hashHistory} routes={routes}/>
        	</div>	
    	</Provider>
    </div>,
    document.getElementById('root')
);


store.dispatch(getCountries());
console.log(store.getState());