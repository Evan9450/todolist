import 'typeface-roboto';

import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import store from './store';

const App = (
    <Provider store={store}>
        <TodoList />
    </Provider>
);
ReactDOM.render(App, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
