import React from 'react';
import ReactDOM from 'react-dom';

import {applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import rootReducer from './js/store/reducers';
import {composeWithDevTools} from 'redux-devtools-extension';

import {setStory, setPage} from "./js/store/router/actions";
import {routerUrl2State} from "./js/services/_functions";

import '@vkontakte/vkui/dist/vkui.css';
import './css/main.css';

import {config} from './config';
import App from './App';

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk),
));
const {activeStory, activeView, activePanel} = routerUrl2State(window.location);

store.dispatch(setStory(activeStory, (activeStory === activeView) ? activePanel : config.basePanel));

if(activeStory !== activeView) 
    store.dispatch(setPage(activeView, activePanel));
 

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);