import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { HashRouter, BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import '../src/style/style.css';
export const store = configureStore();
render(
		<Provider store={store}>
			<HashRouter>
				<App/>
			</HashRouter>
		</Provider>,
		document.getElementById('root')
	);
