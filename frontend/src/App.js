import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import SearchResult from "./components/search-result.component";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <h2>Hello world !</h2>
                </div>
                <Route path="/" exact component={SearchResult} />
                <Route path="/:page" component={SearchResult} />
            </Router>
        );
    }
}

export default App;