import React from 'react'
import { Container, Pagination } from 'react-bootstrap';
import '../../styles/Pagination.css'

function Nextbutton() {
    let active = 1;
    let items = [];
    for (let number = 1; number <= 6; number++) {
    items.push(
        <Pagination.Item key={number} active={number === active}>
        {number}
        </Pagination.Item>,
    );
    }
    return (
        <Container fluid className="py-5">
            <Container className="position-relative">
                <Pagination className="position-absolute top start-50 translate-middle">
                    <Pagination size="md">{items}</Pagination>
                </Pagination> 
            </Container>
        </Container>
    )
}

export default Nextbutton