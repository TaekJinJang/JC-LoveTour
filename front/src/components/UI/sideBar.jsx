import React from 'react';
import { Col, ButtonGroup, Button, Card, Row } from 'react-bootstrap';
import '../../index.css';

function SideBar({ currentPage, setCurrentPage, buttons, title }) {
    return (
        <>
            <Card
                bg="success"
                text="white"
                className="rounded-0"
                style={{
                    fontFamily: 'Pretendard-Regular',
                    fontWeight: 'bold',
                    // 폰트 스타일 지정
                }}
            >
                <Card.Body className="pb-3 pt-3 ">
                    <Card.Title style={{ textAlign: 'center' }}>
                        <h3 className="mb-0">{title}</h3>
                    </Card.Title>
                </Card.Body>
            </Card>
            <ButtonGroup
                vertical
                className="w-100 mt-2"
                style={{
                    fontFamily: 'Pretendard-Regular', // 폰트 스타일 지정
                }}
            >
                {buttons.map((button, index) => (
                    <Button
                        key={index}
                        href={button.href}
                        variant={currentPage === button.label ? 'success' : 'outline-success'}
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
