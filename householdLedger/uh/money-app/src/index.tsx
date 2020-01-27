import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { reducers } from './reducers/index';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import * as actions from './actions'
import * as serviceWorker from './serviceWorker';


let store = createStore(reducers);
store.subscribe(() => {console.log(store.getState())})
store.dispatch(actions.categori_insert({name : '11'}));

const rootCompoenet =  (
                            <Provider store={store}>
                                <App />
                            </Provider>);
ReactDOM.render(rootCompoenet, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
