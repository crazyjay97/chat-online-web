import React from 'react';
import './App.css';
import Home from './view/home/'
import Main from './view/main/main/'
import 'antd-mobile/dist/antd-mobile.css';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import store from './redux'

function App() {

    const onEnterMain = () => {
        console.log("000")
    }

    return (
        <Provider store={store}>
            <div className="App">
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/main" component={Main}/>
                    </Switch>
                </BrowserRouter>
            </div>
        </Provider>
    );
}

export default App;
