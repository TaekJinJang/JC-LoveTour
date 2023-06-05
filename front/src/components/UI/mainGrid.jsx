import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useCallback, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Figure, Carousel, ListGroup, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LOAD_ALL_POSTS_REQUEST } from '../../reducers/post';

// 이미지 경로
import festivalex from '../../assets/mainGrid-assets/festivalex.jpg';






function mainGrid() {
    const { mainPosts, reviewPosts } = useSelector((state) => state.post);
    console.log(mainPosts);

    const navigate = useNavigate();
    const goToAnnounceBoard = useCallback(() => {
        navigate('/board/announce');
    }, []);
    const goToReviewBoard = useCallback(() => {
        navigate('/board/review');
    }, []);
    const goToAnnounceBoardDetail = useCallback((postId) => {
        navigate(`/board/announce/${postId}`);
    }, []);

    return (
        <>
            <Container>
                <Row>
                    {/* 예약현황 */}
                    <Col className="my-2">
                        <Card style={{ width: '100%', height: '300px', overflow: 'hidden' }}>
                            <Card.Header className="d-flex justify-content-between my-card-header">
                                후기
                                <Button variant="outline-primary" className="ml-auto">
                                    +
                                </Button>
                            </Card.Header>
                            <Card.Body>
                                <ListGroup as="ol" onClick={goToReviewBoard}>
                                    <ListGroup.Item
                                        as="li"
                                        className="d-flex justify-content-between align-items-start"
                                    >
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">
                                                {reviewPosts.length > 0 && reviewPosts[reviewPosts.length - 1].title}
                                            </div>
                                            {reviewPosts.length > 0 && reviewPosts[reviewPosts.length - 1].date}
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item
                                        as="li"
                                        className="d-flex justify-content-between align-items-start"
                                    >
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">
                                                {reviewPosts.length > 1 && reviewPosts[reviewPosts.length - 2].title}
                                            </div>
                                            {reviewPosts.length > 1 && reviewPosts[reviewPosts.length - 2].date}
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item
                                        as="li"
                                        className="d-flex justify-content-between align-items-start"
                                    >
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">
                                                {reviewPosts.length > 2 && reviewPosts[reviewPosts.length - 3].title}
                                            </div>
                                            {reviewPosts.length > 2 && reviewPosts[reviewPosts.length - 3].date}
                                        </div>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="my-2">
                        <Card style={{ width: '100%', height: '300px', overflow: 'hidden' }}>
                            <Card.Header className="d-flex justify-content-between">
                                지원 혜택
                                <Button variant="outline-primary" className="ml-auto">
                                    +
                                </Button>
                            </Card.Header>
                            <Card.Body>
                                <ListGroup variant="flush">
                                    <ListGroup.Item action variant="light">
                                        help
                                    </ListGroup.Item>
                                    <ListGroup.Item action variant="light">
                                        Dapibus ac facilisis in
                                    </ListGroup.Item>
                                    <ListGroup.Item action variant="light">
                                        Morbi leo risus
                                    </ListGroup.Item>
                                    <ListGroup.Item action variant="light">
                                        Morbi leo risus
                                    </ListGroup.Item>
                                    <ListGroup.Item action variant="light">
                                        Porta ac consectetur ac
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* 공지사항 */}
                    <Col className="my-2">
                        <Card style={{ width: '100%', height: '300px', overflow: 'hidden' }}>
                            <Card.Header className="d-flex justify-content-between">
                                공지사항
                                <Button variant="outline-primary" className="ml-auto" onClick={goToAnnounceBoard}>
                                    +
                                </Button>
                            </Card.Header>
                            <Card.Body>
                                <ListGroup as="ol" onClick={goToAnnounceBoard}>
                                    <ListGroup.Item
                                        as="li"
                                        className="d-flex justify-content-between align-items-start"
                                    >
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">
                                                {mainPosts.length > 0 && mainPosts[mainPosts.length - 1].title}
                                            </div>
                                            {mainPosts.length > 0 && mainPosts[mainPosts.length - 1].date}
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item
                                        as="li"
                                        className="d-flex justify-content-between align-items-start"
                                    >
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">
                                                {mainPosts.length > 1 && mainPosts[mainPosts.length - 2].title}
                                            </div>
                                            {mainPosts.length > 1 && mainPosts[mainPosts.length - 2].date}
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item
                                        as="li"
                                        className="d-flex justify-content-between align-items-start"
                                    >
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">
                                                {mainPosts.length > 2 && mainPosts[mainPosts.length - 3].title}
                                            </div>
                                            {mainPosts.length > 2 && mainPosts[mainPosts.length - 3].date}
                                        </div>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className="my-2">
                        <Figure>
                            <Figure.Image 
                            style={{width: '500px', height: '200px', objectFit: 'cover'}} 
                            src={festivalex} />
                        </Figure>
                        <Card style={{ width: '100%', height: '300px', overflow: 'hidden' }}>
                            <Card.Header className="d-flex justify-content-between">
                                축제/행사
                                <Button variant="outline-primary" className="ml-auto">
                                    +
                                </Button>
                            </Card.Header>
                            <Card.Body>
                                <Table striped>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Username</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td colSpan={2}>Larry the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="my-2">
                        <Card style={{ width: '100%', height: '520px', overflow: 'hidden' }}>
                            <Card.Body>
                                <Carousel variant="dark" className="mt-4">
                                    <Carousel.Item>
                                        <Row>
                                            <Col>
                                                <figure>
                                                    <img
                                                        width={215}
                                                        height={215}
                                                        src="https://via.placeholder.com/215x215.png"
                                                        alt="figure 1"
                                                    />
                                                </figure>
                                            </Col>
                                            <Col>
                                                <figure>
                                                    <img
                                                        width={215}
                                                        height={215}
                                                        src="https://via.placeholder.com/215x215.png"
                                                        alt="figure 2"
                                                    />
                                                </figure>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <figure>
                                                    <img
                                                        width={215}
                                                        height={215}
                                                        src="https://via.placeholder.com/215x215.png"
                                                        alt="figure 3"
                                                    />
                                                </figure>
                                            </Col>
                                            <Col>
                                                <figure>
                                                    <img
                                                        width={215}
                                                        height={215}
                                                        src="https://via.placeholder.com/215x215.png"
                                                        alt="figure 4"
                                                    />
                                                </figure>
                                            </Col>
                                        </Row>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Row>
                                            <Col>
                                                <figure>
                                                    <img
                                                        width={215}
                                                        height={215}
                                                        src="https://via.placeholder.com/215x215.png"
                                                        alt="figure 1"
                                                    />
                                                </figure>
                                            </Col>
                                            <Col>
                                                <figure>
                                                    <img
                                                        width={215}
                                                        height={215}
                                                        src="https://via.placeholder.com/215x215.png"
                                                        alt="figure 2"
                                                    />
                                                </figure>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <figure>
                                                    <img
                                                        width={215}
                                                        height={215}
                                                        src="https://via.placeholder.com/215x215.png"
                                                        alt="figure 3"
                                                    />
                                                </figure>
                                            </Col>
                                            <Col>
                                                <figure>
                                                    <img
                                                        width={215}
                                                        height={215}
                                                        src="https://via.placeholder.com/215x215.png"
                                                        alt="figure 4"
                                                    />
                                                </figure>
                                            </Col>
                                        </Row>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Row>
                                            <Col>
                                                <figure>
                                                    <img
                                                        width={215}
                                                        height={215}
                                                        src="https://via.placeholder.com/215x215.png"
                                                        alt="figure 1"
                                                    />
                                                </figure>
                                            </Col>
                                            <Col>
                                                <figure>
                                                    <img
                                                        width={215}
                                                        height={215}
                                                        src="https://via.placeholder.com/215x215.png"
                                                        alt="figure 2"
                                                    />
                                                </figure>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <figure>
                                                    <img
                                                        width={215}
                                                        height={215}
                                                        src="https://via.placeholder.com/215x215.png"
                                                        alt="figure 3"
                                                    />
                                                </figure>
                                            </Col>
                                            <Col>
                                                <figure>
                                                    <img
                                                        width={215}
                                                        height={215}
                                                        src="https://via.placeholder.com/215x215.png"
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
                <Row>
                    <Col>
                        <Card className="mt-3">
                            <Card.Body>
                                <Row>
                                    <Col>
                                    <iframe width="300" height="315" src="https://www.youtube.com/embed/3vCKaZLcWhY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </Col>
                                    <Col>
                                    <iframe width="300" height="315" src="https://www.youtube.com/embed/ElDsQj5frtY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </Col>
                                    <Col>
                                    <iframe width="300" height="315" src="https://www.youtube.com/embed/1xUIqj6-crg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
