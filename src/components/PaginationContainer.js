import React from 'react';
import { Pagination, Col } from 'react-bootstrap/lib/';

//if the totalPages >1 it should appear, with the passed properties
const PaginationContainer = ({totalPages, btnSize, activePage, onSelect}) => {
  return (
    <Col sm={12} >
      {totalPages > 1 ?
      <Pagination bsSize={btnSize} items={totalPages} activePage={activePage} onSelect={onSelect} />
      : null }
    </Col>
  )
}

export default PaginationContainer;
