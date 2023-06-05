import React, { useCallback, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import {
    Container,
    Nav,
    Navbar,
    Table,
    NavDropdown,
    Row,
    Col,
    ButtonGroup,
    Button,
    Card,
    Stack,
    Form,
    Badge,
} from 'react-bootstrap';
import { ADD_REVIEW_REQUEST, REMOVE_IMAGE, UPLOAD_IMAGES_REQUEST } from '../../reducers/post';

import useInput from '../../hooks/useInput';
import { useNavigate } from 'react-router-dom';

function reviewBoardWrite() {
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
    return (
        <>
            <Container>
                {/* 상단 네비바 */}
                <Row style={{ width: '100%', marginLeft: 0, marginRight: 0 }}>
                    <Navbar bg="success" expand="lg">
                        <Container>
                            <Navbar.Brand href="#home">
                                <h4>홈</h4>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav>
                                    <NavDropdown as="h5" title="제천 러브투어" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown as="h5" title="러브투어 소개" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Row>

                {/* 사이드 메뉴 */}
                <Row className="mt-3 ps-1" style={{ width: '100%' }}>
                    <Col md={3} className="d-grid gap-2 ms" style={{ height: '100%' }}>
                        <Card bg="success" text="white" style={{ height: '150px' }}>
                            <Card.Body className="bp-0">
                                <Card.Title className="my-3 mx-7 h-1">
                                    <h2>후기게시판</h2>
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
                    {/* </Row>
        <Row className="mt-4">
          <Col md={3} className="d-grid gap-2"></Col> */}
                    {/* 수정 진행 중 -> col/row container 구역 나눔 문제였음 해결함 */}
                    <Col md={9}>
                        <Row>
                            <h2>후기 작성하기</h2>
                            <hr />
                        </Row>
                        <Form encType="multipart/form-data" onSubmit={onSubmitForm}>
                            <Col>
                                {/* 이름 */}
                                <Form.Group as={Row} className="mb-3" controlId="name">
                                    <Col md={2}>
                                        <Card className="text-center" bg="success" border="success" text="white">
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
                                        <Card className="text-center" bg="success" border="success" text="white">
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
                                            placeholder="예약 비밀번호를 입력해주세요. "
                                            value={password}
                                            onChange={onChangePassword}
                                            style={{ backgroundColor: '#D9D9D9' }}
                                        />
                                    </Col>
                                </Form.Group>
                                {/* 제목 */}
                                <Form.Group as={Row} className="mb-3" controlId="title">
                                    <Col md={2}>
                                        <Card className="text-center" bg="success" border="success" text="white">
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
                                {/* 휴대폰번호 */}
                                <Form.Group as={Row} className="mb-3" controlId="phoneNum">
                                    <Col md={2}>
                                        <Card className="text-center" bg="success" border="success" text="white">
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
                                                휴대폰번호
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
                                {/* 내용 */}
                                <Form.Group as={Row} className="mb-3" controlId="text">
                                    <Col md={2}>
                                        <Card className="text-center" bg="success" border="success" text="white">
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
                                            placeholder="내용을 입력해주세요. "
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
                                            <img
                                                src={`http://localhost:3005/${v}`}
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
        </>
    );
}
export default reviewBoardWrite;
