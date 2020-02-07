import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './containers/App';
import { reducers } from './reducers/index';
import { createStore } from 'redux'
import { Provider } from 'react-redux' 
import * as serviceWorker from './serviceWorker';
import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'
import '@blueprintjs/table/lib/css/table.css'
import './style/index.css';
import { BrowserRouter as Router } from "react-router-dom";

{/* <link href="%PUBLIC_URL%/../node_modules/normalize.css/normalize.css" rel="stylesheet" /> */}
let store = createStore(reducers);
store.subscribe(() => {console.log(store.getState())})


const rootCompoenet =  (
                            <Provider store={store}>
                                <Router>
                                    <App/>
                                </Router>
                            </Provider>);
ReactDOM.render(rootCompoenet, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
