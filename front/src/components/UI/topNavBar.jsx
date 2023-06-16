import React from 'react';
import { Row, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

function topNavBar() {
    return (
        <Navbar bg="success" expand="lg" className="p-1">
            <Container>
                <Navbar.Brand href="/">
                    <h5>홈</h5>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <NavDropdown as="h5" title="제천 러브투어" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">지원혜택</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">사진 갤러리</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">영상 갤러리</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown as="h5" title="제천의 이모저모" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">관광지</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">전통시장</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">음식</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">숙박</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.5">축제/행사</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default topNavBar;
