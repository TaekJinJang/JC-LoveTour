import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Stack,
  Form,
  Carousel,
  Nav,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from '../../assets/logo.png';
import map from '../../assets/map.png';
import one from '../../assets/one.png';
import two from '../../assets/two.png';
import three from '../../assets/three.png';

function mainHeader() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <Container>
        {' '}
        <Row>
          <Col xs lg="3">
            <img
              className="Image-logo"
              alt="logo"
              src={logo}
              width="240"
              height="52"
            />
          </Col>

          <Col md="auto"></Col>
          <Col xs lg="5">
            <Stack direction="horizontal" gap={3}>
              <Form.Control
                className="me-auto"
                placeholder="어디로, 어떤 여행을 떠날 예정인가요?"
              />
            </Stack>
          </Col>

          <Col md="auto"></Col>
          <Col xs lg="2">
            <img
              className="Image-map"
              alt="map"
              src={map}
              width="25"
              height="22"
            />
            <div>지도로 보기</div>
          </Col>
        </Row>
        {/* 메뉴바 */}
        <Nav className="justify-content-center" activeKey="/home">
          <Nav.Item>
            <Nav.Link eventKey="link-1">제천 러브투어</Nav.Link>
            <li>러브투어 소개</li>
            <li>지원 혜택</li>
            <li>사진 갤러리</li>
            <li>영상 갤러리</li>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">제천의 이모저모</Nav.Link>
            <li>관광지</li>
            <li>전통시장</li>
            <li>음식</li>
            <li>숙박</li>
            <li>축체/행사</li>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3">테마/코스</Nav.Link>
            <li>기본코스</li>
            <li>힐링코스</li>
            <li>가스트로투어</li>
            <li>제천시티투어</li>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-4">예약</Nav.Link>
            <li>예약 신청</li>
            <li>예약 조회/취소</li>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-5">알림마당</Nav.Link>
            <li>공지사항</li>
            <li>자주하는 질문</li>
            <li>1:1고객센터</li>
          </Nav.Item>
        </Nav>
        {/* 캐러셀 */}
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              style={{ height: '400px', width: '200px' }}
              className="d-block w-100"
              src={one}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: '400px', width: '200px' }}
              className="d-block w-100"
              src={two}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: '400px', width: '200px' }}
              className="d-block w-100"
              src={three}
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
    </>
  );
}

export default mainHeader;
