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
        <Container fluid className="px-0 mx-0 mt-5" style={{ fontFamily: 'SUITE-Regular', width: '100vw' }}>
            <Row xl={12}>
                <Col xl={6} className="ms-5 pe-0">
                    <Row>
                        <Col xs={12} md={6} xl={4} style={{ fontSize: '14px' }}>
                            개인정보처리방침
                        </Col>
                        <Col xs={12} md={6} xl={4} style={{ fontSize: '14px' }}>
                            영상정보처리기기전리방침
                        </Col>
                        <Col xs={12} md={6} xl={4} style={{ fontSize: '14px' }}>
                            저작권 보호
                        </Col>
                        <hr style={{ width: '60%' }}></hr>

                        <Col xs={12} md={6} xl={12} style={{ fontSize: '14px' }}>
                            (12345)충청북도 제천시 세명로
                            <br />
                            COPYRIGHT Jecheon-do ALL Right reserved.
                        </Col>
                    </Row>
                </Col>
                <Col className="d-flex justify-content-end">
                    <Image
                        fluid
                        style={{ opacity: '0.5' }}
                        // className="mt-1"
                        width={350}
                        height="auto"
                        src={footerlogo}
                        alt="footerlogo"
                    />
                </Col>
            </Row>

            <Row>
                <Col
                    xs={6}
                    md={6}
                    xl={6}
                    style={{ backgroundColor: '#37ba86' }}
                    className="px-0 d-flex justify-content-start "
                >
                    <p style={{ fontSize: '20px', color: 'white', marginTop: '7px', marginLeft: '50px' }}>
                        <b style={{ fontSize: '30px' }}>러브투어</b>JECHEON
                    </p>
                </Col>
                <Col
                    xs={6}
                    md={6}
                    xl={6}
                    className="px-0 d-flex justify-content-end "
                    style={{ backgroundColor: '#37ba86' }}
                >
                    <DropdownButton
                        className="me-5 DropdownButton float-right"
                        style={{ marginTop: '14px' }}
                        id="footerdropdown"
                        variant="light"
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
