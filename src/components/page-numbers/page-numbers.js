import React from 'react';
import {Pagination} from "react-bootstrap";

import "./page-numbers.css"

export default function PageNumbers(props) {
    return (
        <Pagination size='sm' className='justify-content-center'>
            {props.currentPage > 1 ? (
                    <Pagination.Item href='/1'>
                        {1}
                    </Pagination.Item>
            ) : ''}
            {props.currentPage > 3 ? (
                <Pagination.Ellipsis />
            ) : ''}

            {props.currentPage > 2 ? (
                <Pagination.Item href={'/' + (props.currentPage - 1)}>
                    {props.currentPage - 1}
                </Pagination.Item>
            ) : ''}
            <Pagination.Item active>
                {props.currentPage}
            </Pagination.Item>
            {props.currentPage < props.numPages - 1 ? (
                <Pagination.Item href={'/' + (props.currentPage + 1)}>
                    {props.currentPage + 1}
                </Pagination.Item>
            ) : ''}

            {props.currentPage < props.numPages - 2 ? (
                <Pagination.Ellipsis />
            ) : ''}
            {props.currentPage < props.numPages ? (
                <Pagination.Item href={'/' + props.numPages}>
                    {props.numPages}
                </Pagination.Item>
            ) : ''}
        </Pagination>
    )
}