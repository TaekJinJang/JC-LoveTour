import React, { useCallback, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import useInput from '../../hooks/useInput';
import { useLocation, useNavigate } from 'react-router-dom';
import { REMOVE_IMAGE, UPDATE_POST_REQUEST } from '../../reducers/post';
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
      const formData = new FormData();
      imagePaths.forEach((p) => {
        formData.append('image', p);
      });
      return dispatch({
        type: UPDATE_POST_REQUEST,
        data: { postId: post.id, title: title, content: text },
      });
    },
    [title, text, imagePaths]
  );

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  // 이미지 파일을 선택하기 위해 새로추가 하였음
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
        <Row className="mt-3 ps-1" style={{ width: '100%' }}>
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
                href="/board/announce"
                variant="outline-success"
                className="mb-2 p-2 rounded"
                size="lg"
                block="true"
              >
                공지사항
              </Button>

              <Button
                href="/board/faq"
                variant="outline-success"
                className="mb-2 p-2 rounded"
                size="lg"
                block="true"
              >
                자주하는 질문
              </Button>
              <Button
                href="/board/review"
                variant="outline-success"
                className="mb-2 p-2 rounded"
                size="lg"
                block="true"
              >
                투어후기
              </Button>

              {/* block button 세로 길이 조정 */}
            </ButtonGroup>
          </Col>

          <Col md={9} className="ps-2">
            <Row>
              <h2>공지사항 수정</h2>
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
                {post.Images &&
                  post.Images.map((v, i) => (
                    <div key={v} style={{ display: 'inline-block' }}>
                      <img
                        src={`${v.src}`}
                        style={{ width: '200px' }}
                        alt={v}
                      />
                      <div>
                        <Button variant="danger" onClick={onRemoveImage(i)}>
                          제거
                        </Button>
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
                  수정하기
                </Button>
              </Col>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default announceBoardUpdate;
