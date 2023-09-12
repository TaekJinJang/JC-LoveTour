import React, { useCallback, useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useDispatch, useSelector } from 'react-redux';
import { ADD_GALLERY_REQUEST, REMOVE_IMAGE, UPLOAD_IMAGE_REQUEST } from '../../../reducers/post';
import { Link, useNavigate } from 'react-router-dom';
import useInput from '../../../hooks/useInput';
import '../../UI/paging.css';
import '../../UI/boardUI.css';
import { Form, Button, Card, Nav, Navbar, NavDropdown, Stack, ButtonGroup } from 'react-bootstrap';
import { backUrl } from '../../../../config/config';

//그림추가
import background2 from '../../../assets/background2.png';

// 공통부분
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../../UI/header';
import TopNavBar from '../../UI/topNavBar';
import SideBar from '../../UI/sideBar';
import Footer from '../../UI/footer';

function galleryBoardWrite() {
    const { imagePaths, uploadImagesDone } = useSelector((state) => state.post);
    const { admin } = useSelector((state) => state.admin);
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
            if (!admin) {
                return alert('관리자 로그인이 필요합니다.');
            }
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

    const buttons = [
        { label: '러브투어 소개', href: '/board/introduce' },
        { label: '지원 혜택', href: '/board/supportBenefit' },
        { label: '사진 갤러리', href: '/board/gallery' },
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
                    <h1 style={{ color: 'white' }}>제천 러브투어</h1>
                </div>
            </Container>

            <Container fluid="sm" className="mt-5">
                <Row>
                    {/* 사이드바 */}
                    <Col xs={12} lg={3} sm={3} className="px-0">
                        <SideBar buttons={buttons} title={'상세보기'} />
                    </Col>
                    {/* 제목 */}
                    <Col md={9}>
                        <Col xs={12} lg={9} sm={9}>
                            <Col xs={12} lg={12} sm={12}>
                                <h3>사진갤러리 작성</h3>
                                <hr />
                            </Col>
                            <Form style={{ padding: '30px' }} encType="multipart/form-data" onSubmit={onSubmitForm}>
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
                                            // onChange={onChangeImages}
                                            style={{ backgroundColor: '#D9D9D9' }}
                                        />
                                    </Col>
                                    {/* 이미지 제목 */}
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
                                            <img src={`${v[0].src}`} style={{ width: '200px' }} alt={v[0]} />
                                            <div>
                                                <Button variant="danger" Click={onRemoveImage(i)}>
                                                    제거
                                                </Button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <Button onClick={() => onPushImages(imageTitle, imageText)}>이미지등록</Button>
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
                    </Col>
                </Row>
            </Container>
            <Container fluid style={{ width: '100vw', overflowX: 'hidden' }} className="container-fluid mx-0 p-0">
                <Footer />
            </Container>
        </>
    );
}
export default galleryBoardWrite;
