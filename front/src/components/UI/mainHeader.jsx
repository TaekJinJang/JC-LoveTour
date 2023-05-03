import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Carousel, Container, Nav, Form, Button, Figure
  , Row, Col,
} from 'react-bootstrap';
import logo from '../../assets/logo.png';
import map from '../../assets/map.png';

// src 속 뜨지 않던 holder.js -> https://via.placeholder.com/이미지규격 으로 변경시 전부 정상으로 뜸
// react.svg 사용하지 않았기에 삭제
function MainHeader() {
  return (
    // header - logo, search, mapicon
    <Container>
      <Row bg="light">
        <Col md={4}>
          <Figure>
            <Figure.Image
              className="me-2 mt-1"
              width={300}
              height={52}
              src={logo}
              alt="logo" />
          </Figure>
        </Col>
        <Col md={6} className='mt-3'>
          <Form className="d-flex">
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
        </Col>
        <Col md={2}>
          <Figure>
            <Figure.Image
              className="mt-2"
              width={30}
              height={30}
              src={map}
              alt="map" />
            <Figure.Caption className='text-dark'>
              지도로 보기
            </Figure.Caption>
          </Figure>
        </Col>
      </Row>
// 메뉴
{/* // 캐러셀 */}
      <Row>
        <Container>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                width={800}
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
                width={800}
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
                width={800}
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
      </Row>
    </Container>
  );
}

export default MainHeader;