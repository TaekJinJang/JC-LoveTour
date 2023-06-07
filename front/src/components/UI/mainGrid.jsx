import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useCallback, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Figure,
  Carousel,
  ListGroup,
  Table,
} from 'react-bootstrap';
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

  return (
    <>
      <Container>
        <Row>
          {/* 공지사항 */}
          <Col className="my-2 mx-0" style={{ paddingRight: '0px' }}>
            <Card
              style={{ width: '100%', height: '300px', overflow: 'hidden' }}
              className="bg-light"
            >
              <Card.Header className="d-flex justify-content-between mt-1 border-0 bg-light">
                <div style={{ paddingInline: '10px' }}>
                  <h4>공지사항</h4>
                </div>
                <Button
                  variant="outline-primary"
                  className="ml-auto"
                  onClick={goTosupportBenefit}
                >
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
                      <div
                        className="fw-bold"
                        style={{ fontSize: '0.9em', color: 'green' }}
                      >
                        {mainPosts.length > 0 &&
                          mainPosts[mainPosts.length - 1].title}
                      </div>
                      <div style={{ fontSize: '0.7em' }}>
                        {mainPosts.length > 0 &&
                          mainPosts[mainPosts.length - 1].date}
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
                      <div
                        className="fw-bold"
                        style={{ fontSize: '0.9em', color: 'green' }}
                      >
                        {mainPosts.length > 1 &&
                          mainPosts[mainPosts.length - 2].title}
                      </div>
                      <div style={{ fontSize: '0.7em' }}>
                        {mainPosts.length > 1 &&
                          mainPosts[mainPosts.length - 2].date}
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
                      <div
                        className="fw-bold"
                        style={{ fontSize: '0.9em', color: 'green' }}
                      >
                        {mainPosts.length > 2 &&
                          mainPosts[mainPosts.length - 3].title}
                      </div>
                      <div style={{ fontSize: '0.7em' }}>
                        {mainPosts.length > 2 &&
                          mainPosts[mainPosts.length - 3].date}
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
                      <div
                        className="fw-bold"
                        style={{ fontSize: '0.9em', color: 'green' }}
                      >
                        {mainPosts.length > 3 &&
                          mainPosts[mainPosts.length - 4].title}
                      </div>
                      <div style={{ fontSize: '0.7em' }}>
                        {mainPosts.length > 3 &&
                          mainPosts[mainPosts.length - 4].date}
                      </div>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>

          <Col className="my-2 mx-0 px-2">
            <Card
              style={{ width: '100%', height: '300px', overflow: 'hidden' }}
            >
              <Card.Header
                className="d-flex justify-content-between mt-1"
                style={{ backgroundColor: 'white' }}
              >
                <div style={{ paddingInline: '10px' }}>
                  <h4>지원혜택</h4>
                </div>
                <Button
                  variant="outline-primary"
                  className="ml-auto"
                  onClick={goTosupportBenefit}
                >
                  +
                </Button>
              </Card.Header>
              <Card.Body style={{ backgroundColor: 'white' }} className="p-1">
                <ListGroup variant="flush" as="ol" onClick={goToAnnounceBoard}>
                  <ListGroup.Item
                    action
                    variant="light"
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div
                        className="fw-bold"
                        style={{ fontSize: '0.9em', color: 'green' }}
                      >
                        {mainPosts.length > 0 &&
                          mainPosts[mainPosts.length - 1].title}
                      </div>
                      <div style={{ fontSize: '0.7em' }}>
                        {mainPosts.length > 0 &&
                          mainPosts[mainPosts.length - 1].date}
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
                      <div
                        className="fw-bold"
                        style={{ fontSize: '0.9em', color: 'green' }}
                      >
                        {mainPosts.length > 1 &&
                          mainPosts[mainPosts.length - 2].title}
                      </div>
                      <div style={{ fontSize: '0.7em' }}>
                        {mainPosts.length > 1 &&
                          mainPosts[mainPosts.length - 2].date}
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
                      <div
                        className="fw-bold"
                        style={{ fontSize: '0.9em', color: 'green' }}
                      >
                        {mainPosts.length > 2 &&
                          mainPosts[mainPosts.length - 3].title}
                      </div>
                      <div style={{ fontSize: '0.7em' }}>
                        {mainPosts.length > 2 &&
                          mainPosts[mainPosts.length - 3].date}
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
                      <div
                        className="fw-bold"
                        style={{ fontSize: '0.9em', color: 'green' }}
                      >
                        {mainPosts.length > 3 &&
                          mainPosts[mainPosts.length - 4].title}
                      </div>
                      <div style={{ fontSize: '0.7em' }}>
                        {mainPosts.length > 3 &&
                          mainPosts[mainPosts.length - 4].date}
                      </div>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          {/* 자주하는 질문 */}
          <Col className="my-2 mx-0" style={{ paddingLeft: '0px' }}>
            <Card
              style={{ width: '100%', height: '300px', overflow: 'hidden' }}
              className="bg-light"
            >
              <Card.Header className="d-flex justify-content-between mt-1 border-0 bg-light">
                <div style={{ paddingInline: '10px' }}>
                  <h4>자주하는 질문</h4>
                </div>
                <Button
                  variant="outline-primary"
                  className="ml-auto"
                  onClick={goToFAQ}
                >
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
                      <div
                        className="fw-bold"
                        style={{ fontSize: '0.9em', color: 'green' }}
                      >
                        {reviewPosts.length > 0 &&
                          reviewPosts[reviewPosts.length - 1].title}
                      </div>
                      <div style={{ fontSize: '0.7em' }}>
                        {reviewPosts.length > 0 &&
                          reviewPosts[reviewPosts.length - 1].date}
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
                      <div
                        className="fw-bold"
                        style={{ fontSize: '0.9em', color: 'green' }}
                      >
                        {reviewPosts.length > 1 &&
                          reviewPosts[reviewPosts.length - 2].title}
                      </div>
                      <div style={{ fontSize: '0.7em' }}>
                        {reviewPosts.length > 1 &&
                          reviewPosts[reviewPosts.length - 2].date}
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
                      <div
                        className="fw-bold"
                        style={{ fontSize: '0.9em', color: 'green' }}
                      >
                        {reviewPosts.length > 2 &&
                          reviewPosts[reviewPosts.length - 3].title}
                      </div>
                      <div style={{ fontSize: '0.7em' }}>
                        {reviewPosts.length > 2 &&
                          reviewPosts[reviewPosts.length - 3].date}
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
                      <div
                        className="fw-bold"
                        style={{ fontSize: '0.9em', color: 'green' }}
                      >
                        {reviewPosts.length > 3 &&
                          reviewPosts[reviewPosts.length - 4].title}
                      </div>
                      <div style={{ fontSize: '0.7em' }}>
                        {reviewPosts.length > 3 &&
                          reviewPosts[reviewPosts.length - 4].date}
                      </div>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="my-2">
            <Figure className="mb-2">
              <Figure.Image
                thumbnail
                className="mb-0"
                style={{ width: '500px', height: '200px', objectFit: 'cover' }}
                src={festivalex}
              />
            </Figure>
            <Card
              style={{ width: '100%', height: '300px', overflow: 'hidden' }}
              className="bg-light mt-0"
            >
              <Card.Header className="d-flex justify-content-between mt-1 border-0 bg-light">
                <div style={{ paddingInline: '10px' }}>
                  <h4>축제/행사</h4>
                </div>
                <Button variant="outline-primary" className="ml-auto">
                  +
                </Button>
              </Card.Header>
              <Card.Body className="p-1">
                <ListGroup variant="flush" as="ol" onClick={goToFAQ}>
                  <ListGroup.Item
                    action
                    variant="light"
                    as="li"
                    className="align-items-start"
                  >
                    <div className="d-flex align-items-center">
                      <div
                        className="fw-bold"
                        style={{
                          fontSize: '0.9em',
                          marginRight: '0.5rem',
                          color: 'green',
                        }}
                      >
                        {reviewPosts.length > 0 &&
                          reviewPosts[reviewPosts.length - 1].date}
                      </div>
                      <div className="fw-bold" style={{ fontSize: '0.9em' }}>
                        {reviewPosts.length > 0 &&
                          reviewPosts[reviewPosts.length - 1].title}
                      </div>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    variant="light"
                    as="li"
                    className="align-items-start"
                  >
                    <div className="d-flex align-items-center">
                      <div
                        className="fw-bold"
                        style={{
                          fontSize: '0.9em',
                          marginRight: '0.5rem',
                          color: 'green',
                        }}
                      >
                        {reviewPosts.length > 1 &&
                          reviewPosts[reviewPosts.length - 2].date}
                      </div>
                      <div className="fw-bold" style={{ fontSize: '0.9em' }}>
                        {reviewPosts.length > 1 &&
                          reviewPosts[reviewPosts.length - 2].title}
                      </div>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    variant="light"
                    as="li"
                    className="align-items-start"
                  >
                    <div className="d-flex align-items-center">
                      <div
                        className="fw-bold"
                        style={{
                          fontSize: '0.9em',
                          marginRight: '0.5rem',
                          color: 'green',
                        }}
                      >
                        {reviewPosts.length > 2 &&
                          reviewPosts[reviewPosts.length - 3].date}
                      </div>
                      <div className="fw-bold" style={{ fontSize: '0.9em' }}>
                        {reviewPosts.length > 2 &&
                          reviewPosts[reviewPosts.length - 3].title}
                      </div>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    variant="light"
                    as="li"
                    className="align-items-start"
                  >
                    <div className="d-flex align-items-center">
                      <div
                        className="fw-bold"
                        style={{
                          fontSize: '0.9em',
                          marginRight: '0.5rem',
                          color: 'green',
                        }}
                      >
                        {reviewPosts.length > 3 &&
                          reviewPosts[reviewPosts.length - 4].date}
                      </div>
                      <div className="fw-bold" style={{ fontSize: '0.9em' }}>
                        {reviewPosts.length > 3 &&
                          reviewPosts[reviewPosts.length - 4].title}
                      </div>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    variant="light"
                    as="li"
                    className="align-items-start"
                  >
                    <div className="d-flex align-items-center">
                      <div
                        className="fw-bold"
                        style={{
                          fontSize: '0.9em',
                          marginRight: '0.5rem',
                          color: 'green',
                        }}
                      >
                        {reviewPosts.length > 4 &&
                          reviewPosts[reviewPosts.length - 5].date}
                      </div>
                      <div className="fw-bold" style={{ fontSize: '0.9em' }}>
                        {reviewPosts.length > 4 &&
                          reviewPosts[reviewPosts.length - 5].title}
                      </div>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    variant="light"
                    as="li"
                    className="align-items-start"
                  >
                    <div className="d-flex align-items-center">
                      <div
                        className="fw-bold"
                        style={{
                          fontSize: '0.9em',
                          marginRight: '0.5rem',
                          color: 'green',
                        }}
                      >
                        {reviewPosts.length > 5 &&
                          reviewPosts[reviewPosts.length - 6].date}
                      </div>
                      <div className="fw-bold" style={{ fontSize: '0.9em' }}>
                        {reviewPosts.length > 5 &&
                          reviewPosts[reviewPosts.length - 6].title}
                      </div>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col className="my-2">
            <Card
              style={{ width: '100%', height: '520px', overflow: 'hidden' }}
              className="border-0 m-0 p-0"
            >
              <Card.Body className="p-0">
                <Carousel
                  variant="dark"
                  className="mt-1 p-0"
                  prevIcon={null}
                  nextIcon={null}
                >
                  <Carousel.Item className="m-0 p-0">
                    <Row>
                      <Col style={{ paddingRight: '0px' }}>
                        <figure>
                          <img
                            className="p-0 m-0"
                            style={{
                              width: '235px',
                              height: '240px',
                              objectFit: 'cover',
                              borderRadius: '10px',
                            }}
                            src={img12}
                            alt="figure 1"
                          />
                        </figure>
                      </Col>
                      <Col style={{ paddingLeft: '0px' }}>
                        <figure>
                          <img
                            className="p-0 m-0"
                            style={{
                              width: '235px',
                              height: '240px',
                              objectFit: 'cover',
                              borderRadius: '10px',
                            }}
                            src={img1}
                            alt="figure 2"
                          />
                        </figure>
                      </Col>
                    </Row>
                    <Row>
                      <Col style={{ paddingRight: '0px' }}>
                        <figure>
                          <img
                            className="p-0 m-0"
                            style={{
                              width: '235px',
                              height: '240px',
                              objectFit: 'cover',
                              borderRadius: '10px',
                            }}
                            src={img2}
                            alt="figure 3"
                          />
                        </figure>
                      </Col>
                      <Col style={{ paddingLeft: '0px' }}>
                        <figure>
                          <img
                            className="p-0 m-0"
                            style={{
                              width: '235px',
                              height: '240px',
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
                      <Col style={{ paddingRight: '0px' }}>
                        <figure>
                          <img
                            className="p-0 m-0"
                            style={{
                              width: '235px',
                              height: '240px',
                              objectFit: 'cover',
                              borderRadius: '10px',
                            }}
                            src={img4}
                            alt="figure 1"
                          />
                        </figure>
                      </Col>
                      <Col style={{ paddingLeft: '0px' }}>
                        <figure>
                          <img
                            className="p-0 m-0"
                            style={{
                              width: '235px',
                              height: '240px',
                              objectFit: 'cover',
                              borderRadius: '10px',
                            }}
                            src={img5}
                            alt="figure 2"
                          />
                        </figure>
                      </Col>
                    </Row>
                    <Row>
                      <Col style={{ paddingRight: '0px' }}>
                        <figure>
                          <img
                            className="p-0 m-0"
                            style={{
                              width: '235px',
                              height: '240px',
                              objectFit: 'cover',
                              borderRadius: '10px',
                            }}
                            src={img6}
                            alt="figure 3"
                          />
                        </figure>
                      </Col>
                      <Col style={{ paddingLeft: '0px' }}>
                        <figure>
                          <img
                            className="p-0 m-0"
                            style={{
                              width: '235px',
                              height: '240px',
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
                      <Col style={{ paddingRight: '0px' }}>
                        <figure>
                          <img
                            className="p-0 m-0"
                            style={{
                              width: '235px',
                              height: '240px',
                              objectFit: 'cover',
                              borderRadius: '10px',
                            }}
                            src={img8}
                            alt="figure 1"
                          />
                        </figure>
                      </Col>
                      <Col style={{ paddingLeft: '0px' }}>
                        <figure>
                          <img
                            className="p-0 m-0"
                            style={{
                              width: '235px',
                              height: '240px',
                              objectFit: 'cover',
                              borderRadius: '10px',
                            }}
                            src={img9}
                            alt="figure 2"
                          />
                        </figure>
                      </Col>
                    </Row>
                    <Row>
                      <Col style={{ paddingRight: '0px' }}>
                        <figure>
                          <img
                            className="p-0 m-0"
                            style={{
                              width: '235px',
                              height: '240px',
                              objectFit: 'cover',
                              borderRadius: '10px',
                            }}
                            src={img10}
                            alt="figure 3"
                          />
                        </figure>
                      </Col>
                      <Col style={{ paddingLeft: '0px' }}>
                        <figure>
                          <img
                            className="p-0 m-0"
                            style={{
                              width: '235px',
                              height: '240px',
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
        <Row>
          <Col>
            <Card className="mt-0 mb-3">
              <Card.Body>
                <Row>
                  <Col>
                    <iframe
                      width="300"
                      height="315"
                      src="https://www.youtube.com/embed/3vCKaZLcWhY"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </Col>
                  <Col>
                    <iframe
                      width="300"
                      height="315"
                      src="https://www.youtube.com/embed/ElDsQj5frtY"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </Col>
                  <Col>
                    <iframe
                      width="300"
                      height="315"
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
