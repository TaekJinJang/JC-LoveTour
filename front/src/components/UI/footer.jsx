import React, { useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Image,
  Dropdown,
  DropdownButton,
} from 'react-bootstrap';
import footerlogo from '../../assets/footerlogo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_MY_INFO_REQUEST } from '../../reducers/admin';
import { LOAD_ALL_POSTS_REQUEST } from '../../reducers/post';

function Footer() {
  const { mainPosts } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
  }, []);
  return (
    <footer className="bg-light py-3">
      <Container>
        <Row>
          <Col sm={9}>
            <Row className="mb-4 mt-2">
              <Col sm={2} style={{ fontSize: '12px' }}>
                개인정보처리방침
              </Col>
              <Col sm={3} style={{ fontSize: '12px' }}>
                영상정보처리기기전리방침
              </Col>
              <Col sm={2} style={{ fontSize: '12px' }}>
                저작권 보호
              </Col>
            </Row>
            <Row>
              <hr style={{ width: '60%' }}></hr>
            </Row>
            <Row>
              <Col style={{ fontSize: '12px' }}>
                (12345)충청북도 제천시 세명로
                <br />
                COPYRIGHT Jecheon-do ALL Right reserved.
              </Col>
            </Row>
          </Col>
          <Col sm={3} className="d-flex justify-content-end">
            <Image
              style={{ opacity: '0.5' }}
              className="mt-1"
              width={500}
              height={130}
              src={footerlogo}
              alt="footerlogo"
            />
          </Col>
        </Row>
        <Row>
          <Col sm={3} style={{ backgroundColor: '#2da57d' }}>
            <p style={{ fontSize: '20px', color: 'white', marginTop: '7px' }}>
              <b style={{ fontSize: '30px' }}>러브투어</b>JECHEON
            </p>
          </Col>
          <Col
            sm={9}
            className="d-flex justify-content-end"
            style={{ backgroundColor: '#2da57d' }}
          >
            <DropdownButton
              className="me-5 pe-3 DropdownButton float-right"
              style={{ marginTop: '14px' }}
              id="footerdropdown"
              variant="success"
              title="유관기관"
            >
              <Dropdown.Item href="#/action-1">청풍호반 케이블카</Dropdown.Item>
              <Dropdown.Item href="#/action-2">렛츠 코레일</Dropdown.Item>
              <Dropdown.Item href="#/action-3">제천시의회</Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
