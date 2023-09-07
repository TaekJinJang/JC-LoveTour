import React, { useCallback, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import { Form, Button, Card } from 'react-bootstrap';

import useInput from '../../hooks/useInput';
import { useLocation, useNavigate } from 'react-router-dom';
import { REMOVE_IMAGE, UPDATE_REVIEW_REQUEST } from '../../reducers/post';
import { useDispatch, useSelector } from 'react-redux';

// 공통부분
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../UI/header';
import TopNavBar from '../UI/topNavBar';
import SideBar from '../UI/sideBar';
import Footer from '../UI/footer';

function reviewBoardUpdate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { post } = location.state || {};
  const { imagePaths } = useSelector((state) => state.post);

  const [name, onChangeName] = useInput(post.name);
  const [password, onChangePassword] = useInput(post.password);
  const [title, onChangeTitle] = useInput(post.title);
  const [phoneNum, onChangePhoneNum] = useInput(post.phoneNumber);
  const [text, onChangeText] = useInput(post.content);
  useEffect(() => {
    if (post?.Images) {
      console.log('object');
      const newImagePaths = [...imagePaths]; // 새로운 배열 생성
      post.Images.forEach((v) => newImagePaths.push(v.src));
      // imagePaths를 직접 수정하지 않고 새로운 배열에 값을 추가
      // newImagePaths에 새로운 이미지 경로들을 추가
      // useSelector 훅에서 반환하는 state.post.imagePaths는 변경되지 않음
    }
  }, [post]);
  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      if (!text || !text.trim()) {
        return alert('게시글을 작성하세요');
      }
      navigate('/board/review/'); // 이전페이지로 이동
      return dispatch({
        type: UPDATE_REVIEW_REQUEST,
        data: {
          postId: post.id,
          name: name,
          password: password,
          title: title,
          phoneNumber: phoneNum,
          content: text,
        },
      });
    },
    [name, text, password, title, phoneNum]
  );
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
      <Container style={{ fontFamily: 'Pretendard-Regular' }}>
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
                <h3> 투어 후기</h3>
                <hr />
              </Row>
              <Row>
                <Form onSubmit={onSubmitForm}>
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
                            fontSize: '17px',
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
                  {/* 휴대폰번호 */}
                  <Form.Group as={Row} className="mb-3" controlId="phoneNumber">
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
                          번호
                        </Card.Header>
                      </Card>
                    </Col>

                    <Col md={10}>
                      <Form.Control
                        name="phoneNum"
                        type="phoneNum"
                        placeholder="010-0000-0000"
                        value={phoneNum}
                        onChange={onChangePhoneNum}
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
                          style={{
                            height: '35px',
                            fontSize: '17px',
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
                        placeholder="예약 비밀번호를 입력해주세요 "
                        value={password}
                        onChange={onChangePassword}
                        style={{ backgroundColor: '#D9D9D9' }}
                      />
                    </Col>
                  </Form.Group>

                  {/* 내용 */}
                  <Form.Group as={Row} className="mb-3" controlId="content">
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
                        name="text"
                        type="text"
                        placeholder="내용을 입력해주세요. "
                        value={text}
                        onChange={onChangeText}
                        style={{ backgroundColor: '#D9D9D9', height: '600px' }}
                      />
                    </Col>
                  </Form.Group>
                </Form>
              </Row>
              <Row>
                <Col>
                  {post.Images &&
                    post.Images.map((v, i) => (
                      <div key={v} style={{ display: 'inline-block' }}>
                        <img
                          src={`http://localhost:3005/${v.src}`}
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
                </Col>
                <Col>
                  <Button variant="primary" type="submit">
                    수정하기
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default reviewBoardUpdate;
