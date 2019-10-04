import React, { Component } from 'react';
import axios from 'axios';

import {CardColumns} from "react-bootstrap";
import GarmentThumbnail from "../garment-thumbnail/garment-thumbnail";
import PageNumbers from "../page-numbers/page-numbers";


export default class SearchResult extends Component {
    constructor(props) {
        super(props);

        this.state = {
            results: [],
            numPages: 0,
            numResults: 0
        };
    }

    render() {
        return (
            <div>
                <p><strong>{this.state.numResults}</strong> results for : <strong>QUERY GOES HERE</strong></p>
                <PageNumbers
                    currentPage={Number(this.props.match.params.page) || 1}
                    numPages={this.state.numPages}
                />
                <CardColumns>
                    {this.garmentGrid()}
                </CardColumns>
                <PageNumbers
                    currentPage={Number(this.props.match.params.page) || 1}
                    numPages={this.state.numPages}
                />
            </div>
        )
    }

    componentDidMount() {
        axios.get('http://localhost:4000/garments/' + this.props.match.params.page)
            .then(response => {
                this.setState({
                    results: response.data.docs,
                    numPages: response.data.pages,
                    numResults: response.data.total
                });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    garmentGrid() {
        return this.state.results.map(function(currentGarment, i){
            return <GarmentThumbnail
                garment={currentGarment}
                key={i}
            />;
        })
    }
}