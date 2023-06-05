import React, { useCallback, useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useDispatch, useSelector } from 'react-redux';
import {
  ADD_GALLERY_REQUEST,
  REMOVE_IMAGE,
  UPLOAD_IMAGE_REQUEST,
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

function galleryBoardWrite() {
  const { imagePaths, uploadImagesDone } = useSelector((state) => state.post);
  const [title, onChangeTitle] = useInput('');
  const [text, onChangeText] = useInput('');
  const [imageTitle, onChangeImageTitle, setImageTitle] = useInput('');
  const [imageText, onChangeImageText, setImageText] = useInput('');

  const imageInput = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (uploadImagesDone) {
      setImageTitle('');
      setImageText('');
      imageInput.current.value = ''; // 파일 입력 요소 초기화
    }
  }, [uploadImagesDone]);

  // 기본적인 버그들, 게시글을 작성하기로해놓ㄱ 다 빈칸으로 두거나 알맞은 형식이 아닐땐 요청을 받지 않게끔
  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      if (!text || !text.trim()) {
        return alert('게시글을 작성하세요');
      }
      const formData = new FormData();
      imagePaths.forEach((p) => {
        console.log(p);
        formData.append('image', p[0].src);
        formData.append('captionTitle', p[0].captionTitle);
        formData.append('captionContent', p[0].captionContent);
      });
      formData.append('title', title);
      formData.append('content', text);

      console.log(imagePaths, '이미지패쓰');
      navigate('/board/gallery');
      console.log(formData, '폼데이터');

      return dispatch({
        type: ADD_GALLERY_REQUEST,
        data: formData,
      });
    },
    [title, text, imagePaths]
  );

  //   const onClickImageUpload = useCallback(() => {
  //     imageInput.current.click();
  //   }, [imageInput.current]);

  const onPushImages = useCallback((imageTitle, imageText) => {
    const imageFormData = new FormData();
    [].forEach.call(imageInput.current.files, (f) => {
      imageFormData.append('image', f);
      imageFormData.append('imageTitle', imageTitle);
      imageFormData.append('imageContent', imageText);
    });
    dispatch({
      type: UPLOAD_IMAGE_REQUEST,
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
        <Row className="mt-3 ps-1" style={{ width: '100%' }}>
          <Col md={3} className="d-grid gap-2 ms" style={{ height: '100%' }}>
            <Card bg="success" text="white">
              <Card.Body className="pb-1 pt-1">
                <Card.Title style={{ textAlign: 'center' }}>
                  <h3 className="mb-0">알림</h3>
                  <h3 className="mb-0">마당</h3>
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
                    // onChange={onChangeImages}
                    style={{ backgroundColor: '#D9D9D9' }}
                  />
                </Col>
                {/* 이미지 제목 */}
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
                        이미지 제목
                      </Card.Header>
                    </Card>
                  </Col>

                  <Col md={10}>
                    <Form.Control
                      name="imageTitle"
                      type="text"
                      placeholder="이미지 제목을 입력해주세요. "
                      value={imageTitle}
                      onChange={onChangeImageTitle}
                      style={{ backgroundColor: '#D9D9D9' }}
                    />
                  </Col>
                </Form.Group>
                {/* 이미지 내용 */}
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
                        이미지 내용
                      </Card.Header>
                    </Card>
                  </Col>

                  <Col md={10}>
                    <Form.Control
                      name="imageText"
                      type="text"
                      placeholder="이미지 제목을 입력해주세요. "
                      value={imageText}
                      onChange={onChangeImageText}
                      style={{ backgroundColor: '#D9D9D9' }}
                    />
                  </Col>
                </Form.Group>
              </Form.Group>
              <div>
                {imagePaths.map((v, i) => (
                  <div key={v} style={{ display: 'inline-block' }}>
                    {console.log(v, i)}
                    <img
                      src={`http://localhost:3005/${v[0].src}`}
                      style={{ width: '200px' }}
                      alt={v[0]}
                    />
                    <div>
                      <Button variant="danger" Click={onRemoveImage(i)}>
                        제거
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <Button onClick={() => onPushImages(imageTitle, imageText)}>
                이미지등록
              </Button>
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
export default galleryBoardWrite;
