import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Carousel, Container, Nav, Form, Button, Figure
  , Row, Col,
} from 'react-bootstrap';
import logo from '../../assets/logo.png';
import map from '../../assets/map.png';
import styled from 'styled-components';

const All = styled.div`
  position: relative;
  height: 89px;
  box-shadow: 0px 0px 6px 0px rgba(41, 42, 42, 0.15);
  text-align: center;
  padding: 20px;
`;

const NavUl = styled.ul`
  list-style: none;
  padding: auto;
  padding-left: 0px;
  display: none;
  position: absolute;
  z-index: 1;
  top: 1;
  left: 0;
`;

const NavItem = styled(Nav.Item)`
  position: relative;
  margin-right: 65px;

  &:hover ${NavUl} {
    display: block;
    color: black;
  }
`;

const NavLi = styled(Nav.Link)`
  color: black;
  font-weight: 700;
  font-size: 24px;
  &:hover {
    color: black;
  }
  white-space: nowrap;
  display: inline-block;
`;

const NavLi2 = styled(Nav.Link)`
  &:hover {
    color: black;
  }
  width: 200px;
  height: 50px;
  background-color: rgba(17, 17, 17, 0.4);
  color: white;
  font-size: 20px;
  font-family: 'Inter';
  font-weight: 600;
  line-height: 30px;
`;

const Center = styled.nav`
  position: relative;
  display: flex;
  justify-content: center;
`;

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
{/* // 메뉴 */}
{/* 메뉴바 */}
<Center>
        <Nav activeKey="/home">
          <NavItem>
            <NavLi href="/home">제천 러브투어</NavLi>
            <NavUl>
              <NavLi2 href="#">러브투어 소개</NavLi2>
              <NavLi2 href="#">지원 혜택</NavLi2>
              <NavLi2 href="#">사진 갤러리</NavLi2>
              <NavLi2 href="#">영상 갤러리</NavLi2>
            </NavUl>
          </NavItem>

          <NavItem>
            <NavLi eventKey="#">제천의 이모저모</NavLi>
            <NavUl>
              <NavLi2 href="#">관광지</NavLi2>
              <NavLi2 href="#">전통시장</NavLi2>
              <NavLi2 href="#">음식</NavLi2>
              <NavLi2 href="#">숙박</NavLi2>
              <NavLi2 href="#">축제/행사</NavLi2>
            </NavUl>
          </NavItem>

          <NavItem>
            <NavLi eventKey="#">테마/코스</NavLi>
            <NavUl>
              <NavLi2 href="#">기본코스</NavLi2>
              <NavLi2 href="#">힐링코스</NavLi2>
              <NavLi2 href="#">가스트로투어</NavLi2>
              <NavLi2 href="#">제천시티투어</NavLi2>
            </NavUl>
          </NavItem>

          <NavItem>
            <NavLi eventKey="#">예약</NavLi>
            <NavUl>
              <NavLi2 href="#">예약 신청</NavLi2>
              <NavLi2 href="#">예약 조회/취소</NavLi2>
            </NavUl>
          </NavItem>

          <NavItem>
            <NavLi eventKey="#">알림마당</NavLi>
            <NavUl>
              <NavLi2 href="#">공지사항</NavLi2>
              <NavLi2 href="#">자주하는 질문</NavLi2>
              <NavLi2 href="#">1:1고객센터</NavLi2>
            </NavUl>
          </NavItem>
        </Nav>
      </Center>
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