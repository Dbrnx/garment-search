import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const GarmentThumbnail = props => (
    <p>{props.garment.product_title}</p>
);


export default class SearchResult extends Component {
    render() {
        return (
            <div>
                <p>Search result here</p>
                { this.garmentGrid() }
            </div>
        )
    }

    constructor(props) {
        super(props);

        this.state = {garments: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/garments/')
            .then(response => {
                this.setState({ garments: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    garmentGrid() {
        return this.state.garments.map(function(currentGarment, i){
            return <GarmentThumbnail garment={currentGarment} key={i}/>;
        })
    }
}