import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/sagessky/PrivacyPolicy";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Route exact path="/" component={Home} />
                <Route path="/sagessky/privacy" component={PrivacyPolicy} />
            </div>
        );
    }
}

export default App;
