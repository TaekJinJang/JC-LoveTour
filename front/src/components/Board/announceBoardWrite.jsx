import React, { useCallback, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useDispatch, useSelector } from 'react-redux';
import { ADD_POST_REQUEST, UPLOAD_IMAGES_REQUEST } from '../../reducers/post';
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
  //날짜 추가
  const [date, onChangeDate] = useInput('');
  //작성자 추가
  const [writer, onChangeWriter] = useInput('');
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
      formData.append('content', text);

      navigate('/board/announce');
      return dispatch({
        type: ADD_POST_REQUEST,
        data: { title: title, content: text },
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

  return (
    <>
      <Container>
        <Row className="w-100% p-0">
          {/* 상단 네비바 수정 부분 */}

          <Navbar bg="success" expand="lg">
            <Container>
              <Navbar.Brand href="#home">
                <h3>홈</h3>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <NavDropdown as="h4" title="알림마당" id="basic-nav-dropdown">
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
                    as="h4"
                    title="공지사항"
                    id="basic-nav-dropdown"
                    style={{ textEmphasisColor: 'white' }}
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

        <Row className="mt-3">
          <Col md={3} className="d-grid gap-2 ms" style={{ height: '100%' }}>
            <Card bg="success" text="white" style={{ height: '150px' }}>
              <Card.Body>
                <Card.Title className="my-3 mx-5 h-1">
                  <h2>알림</h2>
                </Card.Title>
                <Card.Title
                  className="my-3 mx-5 h-1"
                  style={{ fontWeight: 'bold', height: '100px' }}
                >
                  <h2>마당</h2>
                </Card.Title>
              </Card.Body>
            </Card>
            <ButtonGroup vertical>
              <Button
                variant="outline-success"
                className="mb-2 p-2"
                size="lg"
                block="true"
              >
                Block Button 1
              </Button>
              <Button
                variant="outline-success"
                className="mb-2 p-2"
                size="lg"
                block="true"
              >
                Block Button 2
              </Button>
              <Button
                variant="outline-success"
                className="mb-2 p-2"
                size="lg"
                block="true"
              >
                Block Button 3
              </Button>
              <Button
                variant="outline-success"
                className="mb-2 p-2"
                size="lg"
                block="true"
              >
                Block Button 4
              </Button>
              <Button
                variant="outline-success"
                className="mb-2 p-2"
                size="lg"
                block="true"
              >
                Block Button 5
              </Button>
              {/* block button 세로 길이 조정 */}
            </ButtonGroup>
          </Col>

          <Col md={9}>
            <Row>
              <h2>공지사항</h2>
              <hr />
            </Row>

            <Form encType="multipart/form-data" onSubmit={onSubmitForm}>
              <input
                type="file"
                multiple
                hidden
                ref={imageInput}
                onChange={onChangeImages}
              />

              {/* 작성날짜 */}
              {/* as를 통해서 ROW(열)처리를 함, mb-3으로 간격을 두었음 */}
              <Form.Group as={Row} className="mb-3" controlId="date">
                <Col md={2}>
                  <Card className="text-center" bg="success" border="success" text="white">
                    <Card.Header style={{ height: '35px' }}>작성날짜</Card.Header>
                  </Card>
                </Col>

                <Col md={10}>
                  <Form.Control
                    name="date"
                    type="text"
                    placeholder="날짜를 입력하세요 "
                    value={date}
                    onChange={onChangeDate}
                    style={{ backgroundColor: '#D9D9D9' }}
                  />
                </Col>
              </Form.Group>

              {/* 작성자 */}
              <Form.Group as={Row} className="mb-3" controlId="writer">
                <Col md={2}>
                  <Card className="text-center" bg="success" border="success" text="white">
                    <Card.Header style={{ height: '35px' }}>작성자</Card.Header>
                  </Card>
                </Col>

                <Col md={10}>
                  <Form.Control
                    name="writer"
                    type="text"
                    placeholder="작성자를 입력하세요 "
                    value={writer}
                    onChange={onChangeWriter}
                    style={{ backgroundColor: '#D9D9D9' }}
                  />
                </Col>
              </Form.Group>

              {/* 제목 */}
              <Form.Group as={Row} className="mb-3" controlId="title">
                <Col md={2}>
                  <Card className="text-center" bg="success" border="success" text="white">
                    <Card.Header style={{ height: '35px' }}>제목</Card.Header>
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
                  <Card className="text-center" bg="success" border="success" text="white">
                    <Card.Header style={{ height: '35px' }}>내용</Card.Header>
                  </Card>
                </Col>

                <Col md={10}>
                  <Form.Control
                    as="textarea"
                    rows={6}
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
                  <Button onClick={onClickImageUpload} variant="success"
                  style={{ width: '98px'}}>
                    이미지
                  </Button>
                </Col>

                <Col md={10}>
                  <Form.Control
                    name="title"
                    type="text"
                    placeholder="이미지 파일 경로 "
                    value={title}
                    onChange={onChangeTitle}
                    style={{ backgroundColor: '#D9D9D9' }}
                  />
                </Col>
              </Form.Group>

              <Col className="d-flex justify-content-end">
                <Button variant="success" type="submit"
                style={{ width: '100px', borderRadius: '30px' }}>
                  등록
                </Button>
              </Col>
            </Form>
          </Col>
        </Row>
        <Footer />

      </Container>
    </>
  );
}
export default announceBoardWrite;
