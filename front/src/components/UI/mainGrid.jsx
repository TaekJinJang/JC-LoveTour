import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useCallback, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Figure, Carousel, ListGroup, Table, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LOAD_ALL_POSTS_REQUEST } from '../../reducers/post';

// 이미지 경로
import festivalex from '../../assets/mainGrid-assets/festivalex.jpg';
import img1 from '../../assets/mainGrid-assets/img1.jpg';
import img2 from '../../assets/mainGrid-assets/img2.jpg';
import img3 from '../../assets/mainGrid-assets/img3.jpg';
import img4 from '../../assets/mainGrid-assets/img4.jpg';
import img5 from '../../assets/mainGrid-assets/img5.jpg';
import img6 from '../../assets/mainGrid-assets/img6.jpg';
import img7 from '../../assets/mainGrid-assets/img7.jpg';
import img8 from '../../assets/mainGrid-assets/img8.jpg';
import img9 from '../../assets/mainGrid-assets/img9.jpg';
import img10 from '../../assets/mainGrid-assets/img10.jpg';
import img11 from '../../assets/mainGrid-assets/img11.jpg';
import img12 from '../../assets/mainGrid-assets/img12.jpg';

function mainGrid() {
    const { mainPosts, reviewPosts } = useSelector((state) => state.post);
    console.log(mainPosts);

    const navigate = useNavigate();
    const goToAnnounceBoard = useCallback(() => {
        navigate('/board/announce');
    }, []);
    const goTosupportBenefit = useCallback(() => {
        navigate('/board/supportBenefit');
    }, []);
    const goToFAQ = useCallback(() => {
        navigate('/board/faq');
    }, []);
    const goToAnnounceBoardDetail = useCallback((postId) => {
        navigate(`/board/announce/${postId}`);
    }, []);
    const goToFestival = useCallback(() => {
        navigate('/board/festival/');
    }, []);

    return (
        <>
            <Container
                className="justify-content-center"
                style={{
                    fontFamily: 'Pretendard-Regular', // 폰트 스타일 지정
                }}
            >
                <Row xs="auto" className="mx-0">
                    {/* 지원혜택 */}
                    <Col xs={12} sm={6} lg={4} className="my-2 mx-0 px-12">
                        <Card style={{ height: '100%', overflow: 'visible' }} className="bg-light ">
                            <Card.Header className="d-flex justify-content-between mt-1 border-0 bg-light">
                                <div style={{ paddingInline: '10px' }}>
                                    <h4 className="fw-bold">지원혜택</h4>
                                </div>
                                <Button variant="outline-success" className="ml-auto" onClick={goTosupportBenefit}>
                                    +
                                </Button>
                            </Card.Header>
                            <Card.Body
                                style={{ backgroundColor: 'white', fontSize: '0.9em' }}
                                className="p-1 m-1 fw-bold"
                            >
                                <p className="m-1"> ● 거주지에서 관광버스를 임차해올 경우 버스 1대당 35만원 지원 </p>
                                <p className="m-1">
                                    ● 청풍호유람선, 청풍호문화재단지, 청품케이블카, 세계기독교박물관 입장료 할인
                                </p>
                                <p className="m-1">● 투어코스 안내 및 해설을 위한 제천시 관광해결사 탑승 지원 </p>
                                <p className="m-1">● 열차편으로 제천역 도착 시 관광버스 1일 최대 20대까지 무상지원</p>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* 공지사항 */}
                    <Col xs={12} sm={6} lg={4} className="my-2 mx-0 px-12">
                        <Card style={{ height: 'auto', overflow: 'visible' }} className="bg-light">
                            <Card.Header className="d-flex justify-content-between mt-1 border-0 bg-light">
                                <div style={{ paddingInline: '10px', fontWeight: 'bold' }}>
                                    <h4>공지사항</h4>
                                </div>
                                <Button variant="outline-primary" className="ml-auto" onClick={goToAnnounceBoard}>
                                    +
                                </Button>
                            </Card.Header>
                            <Card.Body className="p-1">
                                <ListGroup variant="flush" as="ol" onClick={goToAnnounceBoard}>
                                    <ListGroup.Item
                                        action
                                        variant="light"
                                        as="li"
                                        className="d-flex justify-content-between align-items-start"
                                    >
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold" style={{ fontSize: '0.9em', color: 'blue' }}>
                                                {mainPosts.length > 0 && mainPosts[mainPosts.length - 1].title}
                                            </div>
                                            <div style={{ fontSize: '0.7em' }}>
                                                {mainPosts.length > 0 && mainPosts[mainPosts.length - 1].date}
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item
                                        action
                                        variant="light"
                                        as="li"
                                        className="d-flex justify-content-between align-items-start"
                                    >
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold" style={{ fontSize: '0.9em', color: 'blue' }}>
                                                {mainPosts.length > 1 && mainPosts[mainPosts.length - 2].title}
                                            </div>
                                            <div style={{ fontSize: '0.7em' }}>
                                                {mainPosts.length > 1 && mainPosts[mainPosts.length - 2].date}
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item
                                        action
                                        variant="light"
                                        as="li"
                                        className="d-flex justify-content-between align-items-start"
                                    >
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold" style={{ fontSize: '0.9em', color: 'blue' }}>
                                                {mainPosts.length > 2 && mainPosts[mainPosts.length - 3].title}
                                            </div>
                                            <div style={{ fontSize: '0.7em' }}>
                                                {mainPosts.length > 2 && mainPosts[mainPosts.length - 3].date}
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item
                                        action
                                        variant="light"
                                        as="li"
                                        className="d-flex justify-content-between align-items-start"
                                    >
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold" style={{ fontSize: '0.9em', color: 'blue' }}>
                                                {mainPosts.length > 2 && mainPosts[mainPosts.length - 4].title}
                                            </div>
                                            <div style={{ fontSize: '0.7em' }}>
                                                {mainPosts.length > 2 && mainPosts[mainPosts.length - 4].date}
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* 자주하는 질문 */}
                    <Col xs={12} sm={12} lg={4} className="my-2 mx-0 px-12">
                        <Card style={{ height: 'auto', overflow: 'visible' }} className="bg-light">
                            <Card.Header className="d-flex justify-content-between mt-1 border-0 bg-light">
                                <div style={{ paddingInline: '10px' }}>
                                    <h4 className="fw-bold">자주하는 질문</h4>
                                </div>
                                <Button variant="outline-primary" className="ml-auto" onClick={goToFAQ}>
                                    +
                                </Button>
                            </Card.Header>
                            <Card.Body className="p-1">
                                <ListGroup variant="flush" as="ol" onClick={goToFAQ}>
                                    <ListGroup.Item
                                        action
                                        variant="light"
                                        as="li"
                                        className="d-flex justify-content-between align-items-start"
                                    >
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold" style={{ fontSize: '0.9em', color: 'green' }}>
                                                {reviewPosts.length > 0 && reviewPosts[reviewPosts.length - 1].title}
                                            </div>
                                            <div style={{ fontSize: '0.7em' }}>
                                                {reviewPosts.length > 0 && reviewPosts[reviewPosts.length - 1].date}
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item
                                        action
                                        variant="light"
                                        as="li"
                                        className="d-flex justify-content-between align-items-start"
                                    >
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold" style={{ fontSize: '0.9em', color: 'green' }}>
                                                {reviewPosts.length > 1 && reviewPosts[reviewPosts.length - 2].title}
                                            </div>
                                            <div style={{ fontSize: '0.7em' }}>
                                                {reviewPosts.length > 1 && reviewPosts[reviewPosts.length - 2].date}
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item
                                        action
                                        variant="light"
                                        as="li"
                                        className="d-flex justify-content-between align-items-start"
                                    >
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold" style={{ fontSize: '0.9em', color: 'green' }}>
                                                {reviewPosts.length > 2 && reviewPosts[reviewPosts.length - 3].title}
                                            </div>
                                            <div style={{ fontSize: '0.7em' }}>
                                                {reviewPosts.length > 2 && reviewPosts[reviewPosts.length - 3].date}
                                            </div>
                                        </div>
                                    </ListGroup.Item>

                                    <ListGroup.Item
                                        action
                                        variant="light"
                                        as="li"
                                        className="d-flex justify-content-between align-items-start"
                                    >
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold" style={{ fontSize: '0.9em', color: 'green' }}>
                                                {reviewPosts.length > 2 && reviewPosts[reviewPosts.length - 4].title}
                                            </div>
                                            <div style={{ fontSize: '0.7em' }}>
                                                {reviewPosts.length > 2 && reviewPosts[reviewPosts.length - 4].date}
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* 축제사진 */}
                <Row className="mx-0">
                    <Col xs={12} sm={12} lg={6} className="my-2">
                        <Figure className="mb-2 justify-content-center">
                            <Figure.Image
                                thumbnail
                                className="mb-0"
                                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                                src={festivalex}
                            />
                        </Figure>

                        {/* 축제/행사 */}
                        <Card style={{ width: '100%', height: '300px', overflow: 'visible' }} className="bg-light mt-0">
                            <Card.Header className="d-flex justify-content-between mt-1 border-0 bg-light">
                                <div style={{ paddingInline: '10px' }}>
                                    <h4 className="fw-bold">축제/행사</h4>
                                </div>
                                <Button variant="outline-primary" className="ml-auto" onClick={goToFestival}>
                                    +
                                </Button>
                            </Card.Header>
                            <Card.Body className="p-1">
                                <ListGroup variant="flush" as="ol" onClick={goToFestival}>
                                    <ListGroup.Item action variant="light" as="li" className="align-items-start">
                                        <div className="d-flex align-items-center">
                                            <div
                                                className="fw-bold"
                                                style={{
                                                    fontSize: '0.9em',
                                                    marginRight: '0.5rem',
                                                    color: 'green',
                                                }}
                                            >
                                                2023-06-16
                                            </div>
                                            <div className="fw-bold" style={{ fontSize: '0.9em' }}>
                                                2023 육성지원사업(겨자씨친구들)
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item action variant="light" as="li" className="align-items-start">
                                        <div className="d-flex align-items-center">
                                            <div
                                                className="fw-bold"
                                                style={{
                                                    fontSize: '0.9em',
                                                    marginRight: '0.5rem',
                                                    color: 'green',
                                                }}
                                            >
                                                2023-06-16
                                            </div>
                                            <div className="fw-bold" style={{ fontSize: '0.9em' }}>
                                                제천영상미디어센터 정기상영 '길버트 그레이프'
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item action variant="light" as="li" className="align-items-start">
                                        <div className="d-flex align-items-center">
                                            <div
                                                className="fw-bold"
                                                style={{
                                                    fontSize: '0.9em',
                                                    marginRight: '0.5rem',
                                                    color: 'green',
                                                }}
                                            >
                                                2023-06-17
                                            </div>
                                            <div className="fw-bold" style={{ fontSize: '0.9em' }}>
                                                제천영상미디어센터 정기상영 '라따뚜이'
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item action variant="light" as="li" className="align-items-start">
                                        <div className="d-flex align-items-center">
                                            <div
                                                className="fw-bold"
                                                style={{
                                                    fontSize: '0.9em',
                                                    marginRight: '0.5rem',
                                                    color: 'green',
                                                }}
                                            >
                                                2023-06-18
                                            </div>
                                            <div className="fw-bold" style={{ fontSize: '0.9em' }}>
                                                2023 육성지원사업(제천문화홍보단)
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item action variant="light" as="li" className="align-items-start">
                                        <div className="d-flex align-items-center">
                                            <div
                                                className="fw-bold"
                                                style={{
                                                    fontSize: '0.9em',
                                                    marginRight: '0.5rem',
                                                    color: 'green',
                                                }}
                                            >
                                                2023-06-20
                                            </div>
                                            <div className="fw-bold" style={{ fontSize: '0.9em' }}>
                                                2023 육성지원사업(한국연예예술단)
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item action variant="light" as="li" className="align-items-start">
                                        <div className="d-flex align-items-center">
                                            <div
                                                className="fw-bold"
                                                style={{
                                                    fontSize: '0.9em',
                                                    marginRight: '0.5rem',
                                                    color: 'green',
                                                }}
                                            >
                                                2023-06-24
                                            </div>
                                            <div className="fw-bold" style={{ fontSize: '0.9em' }}>
                                                2023 육성지원사업(제천연주인협회)
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* 이미지 배경사진(캐러셀) */}
                    <Col xs={12} sm={12} lg={6} className="my-2">
                        <Card
                            style={{ width: '100%', height: '100%', overflow: 'visible' }}
                            className="border-0 m-0 p-0"
                        >
                            <Card.Body className="p-0">
                                <Carousel variant="dark" className="mt-1 p-0" prevIcon={null} nextIcon={null}>
                                    <Carousel.Item className="m-0 p-0">
                                        <Row>
                                            <Col xs={6} sm={6} lg={6} style={{ paddingRight: '3px' }}>
                                                <figure className="parent-element">
                                                    <Image
                                                        fluid
                                                        className="p-0 m-0"
                                                        style={{
                                                            width: 'auto',
                                                            height: '300px',
                                                            objectFit: 'cover',
                                                            borderRadius: '10px',
                                                        }}
                                                        src={img12}
                                                        alt="figure 1"
                                                    />
                                                </figure>
                                            </Col>
                                            <Col xs={6} sm={6} lg={6} style={{ paddingLeft: '3px' }}>
                                                <figure className="parent-element">
                                                    <Image
                                                        fluid
                                                        className="p-0 m-0"
                                                        style={{
                                                            width: 'auto',
                                                            height: '300px',
                                                            objectFit: 'cover',
                                                            borderRadius: '10px',
                                                        }}
                                                        src={img1}
                                                        alt="figure 2"
                                                    />
                                                </figure>
                                            </Col>

                                            <Col xs={6} sm={6} lg={6} style={{ paddingRight: '3px' }}>
                                                <figure className="parent-element">
                                                    <Image
                                                        fluid
                                                        className="p-0 m-0"
                                                        style={{
                                                            width: 'auto',
                                                            height: '300px',
                                                            objectFit: 'cover',
                                                            borderRadius: '10px',
                                                        }}
                                                        src={img2}
                                                        alt="figure 3"
                                                    />
                                                </figure>
                                            </Col>
                                            <Col xs={6} sm={6} lg={6} style={{ paddingLeft: '3px' }}>
                                                <figure className="parent-element">
                                                    <Image
                                                        fluid
                                                        className="p-0 m-0"
                                                        style={{
                                                            width: 'auto',
                                                            height: '300px',
                                                            objectFit: 'cover',
                                                            borderRadius: '10px',
                                                        }}
                                                        src={img3}
                                                        alt="figure 4"
                                                    />
                                                </figure>
                                            </Col>
                                        </Row>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Row>
                                            <Col xs={6} sm={6} lg={6} style={{ paddingRight: '3px' }}>
                                                <figure className="parent-element">
                                                    <Image
                                                        fluid
                                                        className="p-0 m-0"
                                                        style={{
                                                            width: 'auto',
                                                            height: '300px',
                                                            objectFit: 'cover',
                                                            borderRadius: '10px',
                                                        }}
                                                        src={img4}
                                                        alt="figure 1"
                                                    />
                                                </figure>
                                            </Col>
                                            <Col xs={6} sm={6} lg={6} style={{ paddingLeft: '3px' }}>
                                                <figure className="parent-element">
                                                    <Image
                                                        fluid
                                                        className="p-0 m-0"
                                                        style={{
                                                            width: 'auto',
                                                            height: '300px',
                                                            objectFit: 'cover',
                                                            borderRadius: '10px',
                                                        }}
                                                        src={img5}
                                                        alt="figure 2"
                                                    />
                                                </figure>
                                            </Col>

                                            <Col xs={6} sm={6} lg={6} style={{ paddingRight: '3px' }}>
                                                <figure className="parent-element">
                                                    <Image
                                                        fluid
                                                        className="p-0 m-0"
                                                        style={{
                                                            width: 'auto',
                                                            height: '300px',
                                                            objectFit: 'cover',
                                                            borderRadius: '10px',
                                                        }}
                                                        src={img6}
                                                        alt="figure 3"
                                                    />
                                                </figure>
                                            </Col>
                                            <Col xs={6} sm={6} lg={6} style={{ paddingLeft: '3px' }}>
                                                <figure className="parent-element">
                                                    <Image
                                                        fluid
                                                        className="p-0 m-0"
                                                        style={{
                                                            width: 'auto',
                                                            height: '300px',
                                                            objectFit: 'cover',
                                                            borderRadius: '10px',
                                                        }}
                                                        src={img7}
                                                        alt="figure 4"
                                                    />
                                                </figure>
                                            </Col>
                                        </Row>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Row>
                                            <Col xs={6} sm={6} lg={6} style={{ paddingRight: '3px' }}>
                                                <figure className="parent-element">
                                                    <Image
                                                        fluid
                                                        className="p-0 m-0"
                                                        style={{
                                                            width: 'auto',
                                                            height: '300px',
                                                            objectFit: 'cover',
                                                            borderRadius: '10px',
                                                        }}
                                                        src={img8}
                                                        alt="figure 1"
                                                    />
                                                </figure>
                                            </Col>
                                            <Col xs={6} sm={6} lg={6} style={{ paddingLeft: '3px' }}>
                                                <figure className="parent-element">
                                                    <Image
                                                        fluid
                                                        className="p-0 m-0"
                                                        style={{
                                                            width: 'auto',
                                                            height: '300px',
                                                            objectFit: 'cover',
                                                            borderRadius: '10px',
                                                        }}
                                                        src={img9}
                                                        alt="figure 2"
                                                    />
                                                </figure>
                                            </Col>

                                            <Col xs={6} sm={6} lg={6} style={{ paddingRight: '3px' }}>
                                                <figure className="parent-element">
                                                    <Image
                                                        fluid
                                                        className="p-0 m-0"
                                                        style={{
                                                            width: 'auto',
                                                            height: '300px',
                                                            objectFit: 'cover',
                                                            borderRadius: '10px',
                                                        }}
                                                        src={img10}
                                                        alt="figure 3"
                                                    />
                                                </figure>
                                            </Col>
                                            <Col xs={6} sm={6} lg={6} style={{ paddingLeft: '3px' }}>
                                                <figure className="parent-element">
                                                    <Image
                                                        fluid
                                                        className="p-0 m-0"
                                                        style={{
                                                            width: 'auto',
                                                            height: '300px',
                                                            objectFit: 'cover',
                                                            borderRadius: '10px',
                                                        }}
                                                        src={img11}
                                                        alt="figure 4"
                                                    />
                                                </figure>
                                            </Col>
                                        </Row>
                                    </Carousel.Item>
                                </Carousel>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* 유튜브 영상 */}
                <Row lg={12} className="mx-0">
                    <Col>
                        <Card className="mt-1 mb-3">
                            <Card.Body>
                                <Row>
                                    <Col xs={8} sm={12} lg={4}>
                                        <iframe
                                            width="100%"
                                            // height="300"
                                            src="https://www.youtube.com/embed/3vCKaZLcWhY"
                                            title="YouTube video player"
                                            frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowfullscreen
                                        ></iframe>
                                    </Col>
                                    <Col xs={8} sm={12} lg={4}>
                                        <iframe
                                            width="100%"
                                            // height="300"
                                            src="https://www.youtube.com/embed/ElDsQj5frtY"
                                            title="YouTube video player"
                                            frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowfullscreen
                                        ></iframe>
                                    </Col>
                                    <Col xs={8} sm={12} lg={4}>
                                        <iframe
                                            width="100%"
                                            // height="300"
                                            src="https://www.youtube.com/embed/1xUIqj6-crg"
                                            title="YouTube video player"
                                            frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowfullscreen
                                        ></iframe>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default mainGrid;
