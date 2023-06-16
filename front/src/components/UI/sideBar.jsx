import React from 'react';
import { Col, ButtonGroup, Button, Card, Row } from 'react-bootstrap';

function SideBar({ currentPage, setCurrentPage, buttons, title }) {
  return (
    <>
      <Card bg="success" text="white" className="rounded-0">
        <Card.Body className="pb-3 pt-3 ">
          <Card.Title style={{ textAlign: 'center' }}>
            <h3 className="mb-0">{title}</h3>
          </Card.Title>
        </Card.Body>
      </Card>
      <ButtonGroup vertical className="w-100 mt-2">
        {buttons.map((button, index) => (
          <Button
            key={index}
            href={button.href}
            variant={
              currentPage === button.label ? 'success' : 'outline-success'
            }
            className="mb-2 p-2 rounded-0"
            size="lg"
            block
            onClick={() => setCurrentPage(button.label)}
          >
            {button.label}
          </Button>
        ))}
      </ButtonGroup>
    </>
  );
}

export default SideBar;
