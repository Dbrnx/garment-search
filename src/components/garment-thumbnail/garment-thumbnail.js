import React from 'react';
import {Card} from "react-bootstrap";


export default function GarmentThumbnail(props) {
    return(
        <Card>
            <Card.Img src={props.garment.product_imgs_src} />
            <Card.Body>
                <Card.Title className="text-uppercase text-truncate">
                    <strong>{props.garment.product_title}</strong>
                </Card.Title>
                <Card.Text className="text-truncate">
                    {props.garment.brand}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <strong>£{props.garment.price}</strong>
            </Card.Footer>
        </Card>
    )
}