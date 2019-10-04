import React from 'react';
import {Pagination} from "react-bootstrap";


export default function PageNumbers(props) {
    return (
        <Pagination size='sm' className='justify-content-center'>
            {props.currentPage > 1 ? (
                <Pagination.Item>{1}</Pagination.Item>
            ) : ''}
            {props.currentPage > 2 ? (
                <Pagination.Ellipsis />
            ) : ''}

            {props.currentPage > 2 ? (
                <Pagination.Item>{props.currentPage - 1}</Pagination.Item>
            ) : ''}
            <Pagination.Item active>{props.currentPage}</Pagination.Item>
            {props.currentPage < props.numPages - 1 ? (
                <Pagination.Item>{props.currentPage + 1}</Pagination.Item>
            ) : ''}

            {props.currentPage < props.numPages - 1 ? (
                <Pagination.Ellipsis />
            ) : ''}
            {props.currentPage < props.numPages ? (
                <Pagination.Item>{props.numPages}</Pagination.Item>
            ) : ''}
        </Pagination>
    )
}