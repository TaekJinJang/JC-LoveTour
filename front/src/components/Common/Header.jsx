import React from 'react';
import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Carousel,
} from 'react-bootstrap';
import logo from '../../assets/react.svg';
import carousel1 from '../../assets/react.svg';
import carousel2 from '../../assets/react.svg';
import carousel3 from '../../assets/react.svg';

function Header() {
  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">
          <img
            src={logo}
            className="d-inline-block align-top"
            alt="Jeju Tourism Organization"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About Jeju</Nav.Link>
            <Nav.Link href="#">Things to Do</Nav.Link>
            <Nav.Link href="#">Accommodation</Nav.Link>
            <Nav.Link href="#">Food</Nav.Link>
            <Nav.Link href="#">Transportation</Nav.Link>
            <Nav.Link href="#">News</Nav.Link>
            <Nav.Link href="#">Plan Your Trip</Nav.Link>
            <Nav.Link href="#">Contact Us</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-50"
              src="https://via.placeholder.com/300.png/o0f/fff"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/300.png/o0f/fff"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-50"
              src="https://via.placeholder.com/300.png/o0f/fff"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </Container>
  );
}

export default Header;
