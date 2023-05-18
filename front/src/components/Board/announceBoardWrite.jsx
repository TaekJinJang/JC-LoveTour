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

function announceBoardWrite() {
  const { imagePaths } = useSelector((state) => state.post);
  const [title, onChangeTitle] = useInput('');
  const [text, onChangeText] = useInput('');

  const imageInput = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // 기본적인 버그들, 게시글을 작성하기로해놓ㄱ 다 빈칸으로 두거나 알맞은 형식이 아닐땐 요청을 받지 않게끔
  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
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
    console.log(imageFormData);
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
        {/* 상단 네비바 수정 부분 */}
        <Row className="w-100% p-0">
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
                <Card.Title className="my-3 mx-5 h-1">
                  <h2>알림</h2>
                </Card.Title>
                <Card.Title
                  className="my-3 mx-5 h-1 bp-0"
                  style={{ fontWeight: 'bold', height: '100px' }}
                >
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

          <Col>
            <Col>
              <Row className="mb-4">
                <h2 className="mb-4" style={{ color: '#2da57d' }}>
                  공지사항
                </h2>
                <hr />
              </Row>
            </Col>
            <Form encType="multipart/form-data" onSubmit={onSubmitForm}>
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
                  <Button
                    onClick={onClickImageUpload}
                    variant="success"
                    style={{ width: '98px', fontSize: '17px' }}
                  >
                    이미지
                  </Button>
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
                    <img
                      src={`http://localhost:3005/${v}`}
                      style={{ width: '200px' }}
                      alt={v}
                    />
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

      <Footer />
    </>
  );
}
export default announceBoardWrite;
