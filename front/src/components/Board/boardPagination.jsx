import React from 'react';
import { Pagination } from 'react-bootstrap';

function boardPagination({ currentPage, totalPages, onChangePage }) {
  const items = [];

  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => onChangePage(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return <Pagination>{items}</Pagination>;
}

export default boardPagination;
