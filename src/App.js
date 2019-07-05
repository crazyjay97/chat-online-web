import React from 'react';
import './App.css';
import Main from './view/main/main/'
import 'antd-mobile/dist/antd-mobile.css';
import {Provider} from 'react-redux';
import store from './redux'

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Main/>
            </div>
        </Provider>
    );
}

export default App;
