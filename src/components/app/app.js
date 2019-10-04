import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import {Navbar, Form, FormControl, Button, Container} from "react-bootstrap";
import SearchResult from "../search-result/search-result";

class App extends Component {
    render() {
        return (
            <Router>
                <Container>
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand>
                            Garment Search<br/>
                            <small className="text-muted">
                            a coding exercise for Intelistyle, by Guillaume Debournoux
                            </small>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                        <Navbar.Collapse className="justify-content-end">
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-dark">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>
                    <br/>
                    <Route path="/" exact component={SearchResult} />
                    <Route path="/:page" component={SearchResult} />
                </Container>
            </Router>
        );
    }
}

export default App;