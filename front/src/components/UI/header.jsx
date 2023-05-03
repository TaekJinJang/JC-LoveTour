import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel, Container,Navbar,Form, Button, Figure} from 'react-bootstrap';
import logo from './assets/logo.png';

// src 속 뜨지 않던 holder.js -> https://via.placeholder.com/이미지규격 으로 변경시 전부 정상으로 뜸
// react.svg 사용하지 않았기에 삭제

function CarouselFadeExample() {
  return ( 
    // https://react-bootstrap.netlify.app/docs/components/navbar#features 에서 Color schemes 속 bg="light"
    <Container>
      <Navbar bg="light" className="justify-content-center"> 
            <Figure>
            <Figure.Image
            className="me-2 mt-1"
            width={300}
            height={100}
            src={logo}
            alt ="logo"/>
            </Figure>
            <Form className="d-flex">
              {/* // 입력란을 연장할 방법을 찾아야 함 */}
            <Form.Control
              type="search"
              placeholder="어디로, 어떤 여행을 떠나실 예정이신가요?"
              className="me-2"
              aria-label="Search"
            />
            <Button>
              Search
            </Button>
          </Form>
          {/* <Nav className="auto">
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
          이게 왜 있는 건지 모르겠음*/}
      </Navbar>
    {/* // https://react-bootstrap.github.io/components/carousel/ 에서 Crossfade 로 변경 */}
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          width ={800}
          height={400}
          src="https://via.placeholder.com/800x400"
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
          width ={800}
          height={400}
          src="https://via.placeholder.com/800x400"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          width ={800}
          height={400}
          src="https://via.placeholder.com/800x400"
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
    </Container>

  );
}

export default CarouselFadeExample;