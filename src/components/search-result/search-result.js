import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import {Card, CardColumns} from "react-bootstrap";

const GarmentThumbnail = props => (
    <Card>
        <Card.Img src={props.garment.product_imgs_src} />
        <Card.Body>
            <Card.Title class="text-uppercase text-truncate">
                <strong>{props.garment.product_title}</strong>
            </Card.Title>
            <Card.Text class="text-truncate">
                {props.garment.brand}
            </Card.Text>
        </Card.Body>
        <Card.Footer>
            <strong>£{props.garment.price}</strong>
        </Card.Footer>
    </Card>
);


export default class SearchResult extends Component {
    render() {
        return (
            <CardColumns>
                { this.garmentGrid() }
            </CardColumns>
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