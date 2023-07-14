import React, { useCallback, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  Nav,
  Navbar,
  Table,
  NavDropdown,
  ButtonGroup,
  Button,
  Card,
  Stack,
  Form,
  Badge,
} from 'react-bootstrap';

// 공통부분
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../UI/header';
import TopNavBar from '../UI/topNavBar';
import SideBar from '../UI/sideBar';
import Footer from '../UI/footer';

import {
  ADD_REVIEW_REQUEST,
  REMOVE_IMAGE,
  UPLOAD_IMAGES_REQUEST,
} from '../../reducers/post';

import useInput from '../../hooks/useInput';
import { useNavigate } from 'react-router-dom';
import { backUrl } from '../../../config/config';

function reviewBoardWrite() {
  // // 페이지 버튼 눌린 상태로 만드려고 생성
  // const [currentPage, setCurrentPage] = useState('후기 작성'); // 현재 페이지 상태
  // 적용이 되지 않음
  const { imagePaths } = useSelector((state) => state.post);
  const [name, onChangeName] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [title, onChangeTitle] = useInput('');
  const [phoneNum, onChangePhoneNum] = useInput('');
  const [text, onChangeText] = useInput('');

  const imageInput = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      formData.append('name', name);
      formData.append('password', password);
      formData.append('phoneNumber', phoneNum);
      navigate('/board/review');
      console.log(formData);
      return dispatch({
        type: ADD_REVIEW_REQUEST,
        data: formData,
      });
    },
    [name, text, password, title, phoneNum, imagePaths]
  );
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

  // 사이드바 내용
  const buttons = [
    { label: '공지사항', href: '/board/announce' },
    { label: '자주하는 질문', href: '/board/faq' },
    { label: '투어 후기', href: '/board/review' },
  ];

  return (
    <>
      <Container style={{ fontFamily: 'Pretendard-Regular', }}>
        <Header />
        <Container>
          <Row style={{ width: '100%', marginLeft: 0, marginRight: 0 }}>
            <TopNavBar />
          </Row>
          <Row className="mt-3 ps-1" style={{ width: '100%' }}>
            <Col md={3}>
              <SideBar buttons={buttons} title={'투어 후기'} />
            </Col>
            <Col md={9}>
              <Row>
                <h3>리뷰 작성하기</h3>
                <hr></hr>
              </Row>
              <Form encType="multipart/form-data" onSubmit={onSubmitForm}>
                <Col>
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
                            fontSize: '15px',
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
                        type="title"
                        placeholder="제목을 입력해주세요."
                        value={title}
                        onChange={onChangeTitle}
                        style={{ backgroundColor: '#D9D9D9' }}
                      />
                    </Col>
                  </Form.Group>
                  {/* 이름 */}
                  <Form.Group as={Row} className="mb-3" controlId="name">
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
                            fontSize: '15px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          이름
                        </Card.Header>
                      </Card>
                    </Col>

                    <Col md={10}>
                      <Form.Control
                        name="name"
                        type="text"
                        placeholder="이름을 입력해주세요. "
                        value={name}
                        onChange={onChangeName}
                        style={{ backgroundColor: '#D9D9D9' }}
                      />
                    </Col>
                  </Form.Group>
                  {/* 비밀번호 */}
                  <Form.Group as={Row} className="mb-3" controlId="password">
                    <Col md={2}>
                      <Card
                        className="text-center"
                        bg="success"
                        border="success"
                        text="white"
                      >
                        <Card.Header
                          className="p-0"
                          style={{
                            height: '35px',
                            fontSize: '15px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          비밀번호
                        </Card.Header>
                      </Card>
                    </Col>

                    <Col md={10}>
                      <Form.Control
                        name="password"
                        type="password"
                        placeholder="비밀번호를 입력해주세요. "
                        value={password}
                        onChange={onChangePassword}
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
                            fontSize: '15px',
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
                        name="text"
                        type="text"
                        value={text}
                        onChange={onChangeText}
                        style={{ backgroundColor: '#D9D9D9', height: '300px' }}
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
                            fontSize: '15px',
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
                  {/* 제거 */}
                  <div>
                    {imagePaths.map((v, i) => (
                      <div key={v} style={{ display: 'inline-block' }}>
                        <img src={`${v}`} style={{ width: '200px' }} alt={v} />
                        <div>
                          <Button variant="danger" onClick={onRemoveImage(i)}>
                            제거
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* 글쓰기버튼 */}
                  <Col className="d-flex justify-content-end">
                    <Button
                      className="mb-4"
                      variant="success"
                      type="submit"
                      style={{ width: '100px', borderRadius: '30px' }}
                    >
                      글쓰기
                    </Button>
                  </Col>
                </Col>
              </Form>
            </Col>
          </Row>
        </Container>
        <Footer />
      </Container>
      {/* </Row>
        <Row className="mt-4">
          <Col md={3} className="d-grid gap-2"></Col> */}
      {/* 수정 진행 중 -> col/row container 구역 나눔 문제였음 해결함 */}
    </>
  );
}
export default reviewBoardWrite;
