import React, { useCallback, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import useInput from '../../hooks/useInput';
import { useLocation, useNavigate } from 'react-router-dom';
import { UPDATE_POST_REQUEST } from '../../reducers/post';
import { useDispatch, useSelector } from 'react-redux';

import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Card,
  Nav,
  Navbar,
  NavDropdown,
  Stack,
  ButtonGroup,
} from 'react-bootstrap';
function announceBoardUpdate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { post } = location.state || {};
  const { imagePaths } = useSelector((state) => state.post);
  const [title, onChangeTitle] = useInput(post.title);
  const [text, onChangeText] = useInput(post.content);
  const imageInput = useRef();
  const { mainPosts } = useSelector((state) => state.post);

  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      navigate('/board/announce/'); // 이전페이지로 이동
      return dispatch({
        type: UPDATE_POST_REQUEST,
        data: { postId: post.id, title: title, content: text },
      });
    },
    [title, text]
  );

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  return (
    <>
      <Container>
        {/* 상단 네비바 수정 부분 */}
        <Row style={{ width: '100%', marginLeft: 0, marginRight: 0 }}>
          <Navbar bg="success" expand="lg">
            <Container>
              <Navbar.Brand href="#home">
                <h4>홈</h4>
              </Navbar.Brand>

              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                  <NavDropdown as="h5" title="알림마당" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown as="h5" title="공지사항" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Row>

        {/* // 2번 그리드 여기 아래의 코드가 바로 사이드바 코드 */}
        <Row className="mt-3 ps-1">
          <Col md={3} className="d-grid gap-2 ms" style={{ height: '100%' }}>
            <Card bg="success" text="white" style={{ height: '150px' }}>
              <Card.Body className="bp-0">
                <Card.Title
                  className="my-3 mx-5 h-1"
                  style={{ textAlign: 'center' }}
                >
                  <h2>알림</h2>
                  <h2>마당</h2>
                </Card.Title>
              </Card.Body>
            </Card>
            <ButtonGroup vertical>
              <Button
                variant="outline-success"
                className="mb-2 p-2 rounded"
                size="lg"
                block="true"
              >
                공지사항
              </Button>
              <Button
                variant="outline-success"
                className="mb-2 p-2 rounded"
                size="lg"
                block="true"
              >
                자주하는 질문
              </Button>
              <Button
                variant="outline-success"
                className="mb-2 p-2 rounded"
                size="lg"
                block="true"
              >
                1:1 고객센터
              </Button>

              {/* block button 세로 길이 조정 */}
            </ButtonGroup>
          </Col>
        </Row>

        {/* <h1>글 수정하기</h1> */}
      </Container>
    </>
  );
}

export default announceBoardUpdate;
