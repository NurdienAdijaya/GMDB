import React from 'react'
import Pagination from 'react-bootstrap/Pagination'

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

    const paginationBasic = (
        <div>
          <Pagination size="sm">{items}</Pagination>
        </div>
      );

    return (
        <div className="container fluid">
            <div className="container py-4">
                <div className="text-md-center">
                    <Pagination>
                        <Pagination.Prev />
                            <Pagination.Item active>{1}</Pagination.Item>
                            <Pagination.Item>{2}</Pagination.Item>
                            <Pagination.Item>{3}</Pagination.Item>
                            <Pagination.Item>{4}</Pagination.Item>
                            <Pagination.Item>{5}</Pagination.Item>
                            <Pagination.Item>{6}</Pagination.Item>
                        <Pagination.Next />
                    </Pagination> 
                </div>
            </div>
        </div>
    )
}

export default Nextbutton
