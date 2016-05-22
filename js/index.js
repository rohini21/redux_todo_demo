import "../css/lib/bootstrap.min.css";
import "./lib/bootstrap/bootstrap.min.js";

import "../css/style.css";

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import App from "./app";
import Task from "./task/task";

import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './reducers/reducer';
import persistState, {mergePersistedState} from 'redux-localstorage';

const createPersistentStore = compose(
  persistState(),
  applyMiddleware(thunk)
)(createStore)

const store = createPersistentStore(
	reducer
)

render((
	<Provider store={store}>
		<Router history={browserHistory}>
	    <Route path="/" component={App}>
		    <Route name="tasks" path="tasks" component={Task} />
	    </Route>
	  </Router>
  </Provider>
), document.getElementById("app"))

