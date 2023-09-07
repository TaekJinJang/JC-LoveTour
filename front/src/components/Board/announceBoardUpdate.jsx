import React, { useCallback, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import useInput from '../../hooks/useInput';
import { useLocation, useNavigate } from 'react-router-dom';
import { REMOVE_IMAGE, UPDATE_POST_REQUEST } from '../../reducers/post';
import { useDispatch, useSelector } from 'react-redux';

// 상단 그림
import background2 from '../../assets/background2.png';

// 준비중 그림
import setting from '../../assets/setting.jpg';

// 공통부분
import { Container, Row, Col, Figure, Form, Button, Card } from 'react-bootstrap';
import PageNav from '../UI/pageNav';
import SideBar from '../UI/sideBar';
import Footer from '../UI/footer';
import Header from '../UI/header';

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

    // 사이드바 내용
    const buttons = [
        { label: '공지사항', href: '/board/announce' },
        { label: '자주하는 질문', href: '/board/faq' },
        { label: '투어 후기', href: '/board/review' },
    ];

    return (
        <>
            <Header />
            {/* 상단이미지 */}
            <Container
                fluid
                style={{ height: '40vh', width: '100vw', overflowX: 'hidden' }}
                className="container-fluid m-0 p-0"
            >
                <div
                    style={{
                        backgroundImage: `url(${background2})`,
                        height: '37vh',
                        width: '100vw',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        display: 'flex',
                        justifyContent: 'center', // 가로 방향 가운데 정렬
                        alignItems: 'center', // 세로 방향 가운데 정렬
                    }}
                >
                    <h1 style={{ color: 'white' }}>공지사항</h1>
                </div>
            </Container>
            <Container fluid="sm" className="mt-5">
                <Row>
                    {/* 사이드바 */}
                    <Col xs={12} lg={3} sm={3} className="px-0">
                        <SideBar buttons={buttons} title={'공지사항 수정'} />
                    </Col>
                    {/* 제목 */}
                    <Col xs={12} lg={9} sm={9}>
                        <Col xs={12} lg={12} sm={12}>
                            <h3>공지사항 수정</h3>
                            <hr />
                        </Col>

                        <Col xs={12} lg={12} sm={12}>
                            <Form style={{ padding: '16px' }} encType="multipart/form-data" onSubmit={onSubmitForm}>
                                {/* 제목 */}
                                <Form.Group as={Row} className="mb-3" controlId="title">
                                    <Col md={2}>
                                        <Card className="text-center" bg="success" border="success" text="white">
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
                                        <Card className="text-center" bg="success" border="success" text="white">
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
                                        <Card className="text-center" bg="success" border="success" text="white">
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
                                                <img src={`${v.src}`} style={{ width: '200px' }} alt={v} />
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
                    </Col>
                </Row>
            </Container>
            {/* 푸터 */}
            <Container fluid style={{ width: '100vw', overflowX: 'hidden' }} className="container-fluid mx-0 p-0">
                <Footer />
            </Container>
        </>
    );
}

export default announceBoardUpdate;
