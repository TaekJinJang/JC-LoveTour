import React from 'react';
import { Col, ButtonGroup, Button, Card, Row, Container } from 'react-bootstrap';

function SideBar({ currentPage, setCurrentPage, buttons, title }) {
    return (
        <>
            <Card
                text="white"
                className="rounded-0 px-0"
                style={{
                    borderColor: '#37ba86',
                    backgroundColor: '#37ba86',
                    textAlign: 'center',
                }}
            >
                <Card.Body className="pb-4 pt-4 px-0">
                    <Card.Title style={{ textAlign: 'center' }}>
                        <h3>{title}</h3>
                    </Card.Title>
                </Card.Body>
            </Card>

            <ButtonGroup vertical className="w-100 mt-2 p-0">
                {buttons.map((button, index) => (
                    <Button
                        // style={{
                        //     borderColor: '#37ba86',
                        //     backgroundColor: '#37ba86',
                        //     textAlign: 'center',
                        // }}
                        href={button.href}
                        key={index}
                        variant={currentPage === button.label ? 'success' : 'outline-success'}
                        className="mb-2 rounded-0 px-0"
                        block
                        onClick={() => setCurrentPage(button.label)}
                        // style={{ borderColor: '#37ba86' }}
                    >
                        {button.label}
                    </Button>
                ))}
            </ButtonGroup>
        </>
    );
}

export default SideBar;
