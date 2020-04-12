import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Listing from './components/listing';
import store from "./store";
import {Provider} from "react-redux";
import Header from "./components/header";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import AppDetail from "./components/detail";


function App() {
    return (
        <Provider store={store}>
            <Header/>
            <div className="body-container container">
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/appDetails">
                            <AppDetail/>
                        </Route>
                        <Route exact path="/">
                            <Listing/>
                        </Route>
                        <Route path="*">
                            <Redirect to="/"/>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        </Provider>
    );
}

export default App;
