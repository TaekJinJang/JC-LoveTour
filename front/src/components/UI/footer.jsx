import React, { useEffect } from 'react';

import { Container, Row, Col, Image, Dropdown, DropdownButton } from 'react-bootstrap';

import footerlogo from '../../assets/footerlogo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_MY_INFO_REQUEST } from '../../reducers/admin';
function Footer() {
    const { mainPosts } = useSelector((state) => state.post);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: LOAD_MY_INFO_REQUEST,
        });
    }, []);
    return (
        <Container fluid="sm" className="px-12" style={{ fontFamily: 'Pretendard-Regular' }}>
            <Row className="mx-0" style={{ width: '100%', marginLeft: 0, marginRight: 0 }}>
                <Col>
                    <Row className="mb-4 mt-2 w-100%">
                        <Col xs={12} md={12} xl={4} style={{ fontSize: '12px' }}>
                            개인정보처리방침
                        </Col>
                        <Col xs={12} md={12} xl={4} style={{ fontSize: '12px' }}>
                            영상정보처리기기전리방침
                        </Col>
                        <Col xs={12} md={12} xl={4} style={{ fontSize: '12px' }}>
                            저작권 보호
                        </Col>
                    </Row>
                    <Row>
                        <hr style={{ width: '60%' }}></hr>
                    </Row>
                    <Row>
                        <Col xs={12} md={12} xl={4} style={{ fontSize: '12px' }}>
                            (12345)충청북도 제천시 세명로
                            <br />
                            COPYRIGHT Jecheon-do ALL Right reserved.
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} md={6} xl={4} className="d-flex justify-content-end">
                    <Image
                        fluid="sm"
                        style={{ opacity: '0.5' }}
                        className="mt-1"
                        width={500}
                        height={130}
                        src={footerlogo}
                        alt="footerlogo"
                    />
                </Col>
            </Row>

            <Row style={{ width: '100%', marginLeft: 0, marginRight: 0 }}>
                <Col xs={6} md={6} xl={6} style={{ backgroundColor: '#2da57d' }}>
                    <p style={{ fontSize: '20px', color: 'white', marginTop: '7px' }}>
                        <b style={{ fontSize: '30px' }}>러브투어</b>JECHEON
                    </p>
                </Col>
                <Col
                    xs={6}
                    md={6}
                    xl={6}
                    className="d-flex justify-content-end "
                    style={{ backgroundColor: '#2da57d' }}
                >
                    <DropdownButton
                        className="me-5 DropdownButton float-right"
                        style={{ marginTop: '14px' }}
                        id="footerdropdown"
                        variant="success"
                        title="유관기관"
                    >
                        <Dropdown.Item href="/">청풍호반 케이블카</Dropdown.Item>
                        <Dropdown.Item href="/">렛츠 코레일</Dropdown.Item>
                        <Dropdown.Item href="/">제천시의회</Dropdown.Item>
                    </DropdownButton>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;
