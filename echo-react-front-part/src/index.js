/**
 * Imports de dépendances
 */
import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';

/**
 * Imports locaux
 */
import App from 'src/components/App';
import appStore from 'src/store';
import {LOAD_ECHOS, GET_ALL_TAGS, COOKIES_CHECK} from 'src/store/actions';

/**
 * Code
 */
const rootComponent = <Provider store={appStore}><CookiesProvider><App/></CookiesProvider></Provider>;
const renderingArea = document.querySelector('#root');
ReactDOM.render(rootComponent, renderingArea);

appStore.dispatch({
  type: LOAD_ECHOS
});

appStore.dispatch({
  type: GET_ALL_TAGS,
});

appStore.dispatch({
  type: COOKIES_CHECK,
})


