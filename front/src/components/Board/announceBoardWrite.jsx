import React, { useCallback, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useDispatch, useSelector } from 'react-redux';
import {
  ADD_POST_REQUEST,
  REMOVE_IMAGE,
  UPLOAD_IMAGES_REQUEST,
} from '../../reducers/post';
import { Link, useNavigate } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import '../UI/paging.css';
import '../UI/boardUI.css';
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
import Footer from '../UI/footer';
import { backUrl } from '../../../config/config';

function announceBoardWrite() {
  const { imagePaths } = useSelector((state) => state.post);
  const { admin } = useSelector((state) => state.admin);
  const [title, onChangeTitle] = useInput('');
  const [text, onChangeText] = useInput('');

  const imageInput = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // 기본적인 버그들, 게시글을 작성하기로해놓ㄱ 다 빈칸으로 두거나 알맞은 형식이 아닐땐 요청을 받지 않게끔
  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      if (!admin) {
        return alert('관리자 로그인이 필요합니다.');
      }
      if (!text || !text.trim()) {
        return alert('게시글을 작성하세요');
      }
      const formData = new FormData();
      imagePaths.forEach((p) => {
        formData.append('image', p);
      });
      formData.append('title', title);
      formData.append('content', text);

      console.log(formData);
      navigate('/board/announce');

      return dispatch({
        type: ADD_POST_REQUEST,
        data: formData,
      });
    },
    [title, text, imagePaths]
  );

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  const onChangeImages = useCallback((e) => {
    console.log('images', e.target.files);
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (f) => {
      imageFormData.append('image', f);
    });
    dispatch({
      type: UPLOAD_IMAGES_REQUEST,
      data: imageFormData,
    });
  }, []);
  const onRemoveImage = useCallback((index) => () => {
    dispatch({
      type: REMOVE_IMAGE,
      data: index,
    });
  });

  return (
    <>
      <Container>
        {/* 상단 네비바 */}
        <Row style={{ width: '100%', marginLeft: 0, marginRight: 0 }}>
          <Navbar bg="success" expand="lg" className="p-0">
            <Container style={{ top: '-2px' }}>
              <Navbar.Brand href="#home">
                <h6>홈</h6>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                  <NavDropdown
                    as="h6"
                    title="제천 러브투어"
                    id="basic-nav-dropdown"
                  >
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
                  <NavDropdown
                    as="h6"
                    title="러브투어 소개"
                    id="basic-nav-dropdown"
                  >
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

        {/* 사이드바 */}
        {/* 사이드바 */}
        <Row className="mt-3 ps-1" style={{ width: '100%' }}>
          <Col md={3} className="d-grid gap-2 ms" style={{ height: '100%' }}>
            <Card bg="success" text="white" className="rounded-0">
              <Card.Body className="pb-1 pt-1">
                <Card.Title style={{ textAlign: 'center' }}>
                  <h3 className="mb-0">알림마당</h3>
                </Card.Title>
              </Card.Body>
            </Card>
            <ButtonGroup vertical>
              <Button
                href="/board/announce"
                variant="outline-success"
                className="mb-2 p-2 rounded-0"
                size="lg"
                block
              >
                공지사항
              </Button>
              <Button
                href="/board/faq"
                variant="outline-success"
                className="mb-2 p-2 rounded-0"
                size="lg"
                block
              >
                자주하는 질문
              </Button>
              <Button
                href="/board/review"
                variant="outline-success"
                className="mb-2 p-2 rounded-0"
                size="lg"
                block
              >
                투어후기
              </Button>
            </ButtonGroup>
          </Col>

          <Col md={9} className="ps-2">
            <Row>
              <h3>공지사항</h3>
              <hr />
            </Row>

            <Form
              style={{ padding: '30px' }}
              encType="multipart/form-data"
              onSubmit={onSubmitForm}
            >
              {/* 제목 */}
              <Form.Group as={Row} className="mb-3" controlId="title">
                <Col md={2}>
                  <Card
                    className="text-center"
                    bg="success"
                    border="success"
                    text="white"
                  >
                    <Card.Header
                      style={{
                        height: '35px',
                        fontSize: '17px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      제목
                    </Card.Header>
                  </Card>
                </Col>

                <Col md={10}>
                  <Form.Control
                    name="title"
                    type="text"
                    placeholder="제목을 입력해주세요. "
                    value={title}
                    onChange={onChangeTitle}
                    style={{ backgroundColor: '#D9D9D9' }}
                  />
                </Col>
              </Form.Group>

              {/* 내용 */}
              <Form.Group as={Row} className="mb-3" controlId="text">
                <Col md={2}>
                  <Card
                    className="text-center"
                    bg="success"
                    border="success"
                    text="white"
                  >
                    <Card.Header
                      style={{
                        height: '35px',
                        fontSize: '17px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      내용
                    </Card.Header>
                  </Card>
                </Col>

                <Col md={10}>
                  <Form.Control
                    as="textarea"
                    rows={15}
                    name="text"
                    type="text"
                    placeholder="내용을 입력해주세요."
                    value={text}
                    onChange={onChangeText}
                    style={{ backgroundColor: '#D9D9D9' }}
                  />
                </Col>
              </Form.Group>

              {/* 이미지 업로드 */}
              <Form.Group as={Row} className="mb-3" controlId="text">
                <Col md={2}>
                  <Card
                    className="text-center"
                    bg="success"
                    border="success"
                    text="white"
                  >
                    <Card.Header
                      style={{
                        height: '35px',
                        fontSize: '17px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      이미지
                    </Card.Header>
                  </Card>
                </Col>

                <Col md={10}>
                  <Form.Control
                    name="image"
                    type="file"
                    ref={imageInput}
                    multiple
                    onChange={onChangeImages}
                    style={{ backgroundColor: '#D9D9D9' }}
                  />
                </Col>
              </Form.Group>
              <div>
                {imagePaths.map((v, i) => (
                  <div key={v} style={{ display: 'inline-block' }}>
                    <img src={`${v}`} style={{ width: '200px' }} alt={v} />
                    <div>
                      <Button onClick={onRemoveImage(i)}>제거</Button>
                    </div>
                  </div>
                ))}
              </div>

              <Col className="d-flex justify-content-end">
                <Button
                  className="mb-4"
                  variant="success"
                  type="submit"
                  style={{ width: '100px', borderRadius: '30px' }}
                >
                  등록
                </Button>
              </Col>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default announceBoardWrite;
