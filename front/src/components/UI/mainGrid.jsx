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
import festivalex from '../../assets/mainGridIMG/festivalex.jpg'
import gal1 from '../../assets/mainGridIMG/gal1.jpg'
import gal2 from '../../assets/mainGridIMG/gal2.jpg'
import gal3 from '../../assets/mainGridIMG/gal3.jpg'
import gal4 from '../../assets/mainGridIMG/gal4.jpg'
import gal5 from '../../assets/mainGridIMG/gal5.jpg'
import gal6 from '../../assets/mainGridIMG/gal6.jpg'
import gal7 from '../../assets/mainGridIMG/gal7.jpg'
import gal8 from '../../assets/mainGridIMG/gal8.jpg'
import gal9 from '../../assets/mainGridIMG/gal9.jpg'
import gal10 from '../../assets/mainGridIMG/gal10.jpg'
import gal11 from '../../assets/mainGridIMG/gal11.jpg'
import gal12 from '../../assets/mainGridIMG/gal12.jpg'





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
          <Col className="my-2">
            <Card
              style={{ width: '100%', height: '300px', overflow: 'hidden' }}
            >
              <Card.Header className="d-flex justify-content-between my-card-header">
                공지 사항(리뷰 게시판과 연결되어 있음)
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
                        {reviewPosts.length > 0 &&
                          reviewPosts[reviewPosts.length - 1].title}
                      </div>
                      {reviewPosts.length > 0 &&
                        reviewPosts[reviewPosts.length - 1].date}
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">
                        {reviewPosts.length > 1 &&
                          reviewPosts[reviewPosts.length - 2].title}
                      </div>
                      {reviewPosts.length > 1 &&
                        reviewPosts[reviewPosts.length - 2].date}
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">
                        {reviewPosts.length > 2 &&
                          reviewPosts[reviewPosts.length - 3].title}
                      </div>
                      {reviewPosts.length > 2 &&
                        reviewPosts[reviewPosts.length - 3].date}
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col className="my-2">
            <Card
              style={{ width: '100%', height: '300px', overflow: 'hidden' }}
            >
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
            <Card
              style={{ width: '100%', height: '300px', overflow: 'hidden' }}
            >
              <Card.Header className="d-flex justify-content-between">
                공지사항
                <Button
                  variant="outline-primary"
                  className="ml-auto"
                  onClick={goToAnnounceBoard}
                >
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
                        {mainPosts.length > 0 &&
                          mainPosts[mainPosts.length - 1].title}
                      </div>
                      {mainPosts.length > 0 &&
                        mainPosts[mainPosts.length - 1].date}
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">
                        {mainPosts.length > 1 &&
                          mainPosts[mainPosts.length - 2].title}
                      </div>
                      {mainPosts.length > 1 &&
                        mainPosts[mainPosts.length - 2].date}
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">
                        {mainPosts.length > 2 &&
                          mainPosts[mainPosts.length - 3].title}
                      </div>
                      {mainPosts.length > 2 &&
                        mainPosts[mainPosts.length - 3].date}
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
              style={{ width: 500, height: 200}}
              src={festivalex}
              thumbnail/>
            </Figure>
            <Card
              style={{ width: '100%', height: '300px', overflow: 'hidden' }}
            >
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
            <Card
              style={{ width: '100%', height: '520px', overflow: 'hidden' }}
            >
              <Card.Body>
                <Carousel variant="dark" className="mt-4">
                  <Carousel.Item>
                    <Row>
                      <Col>
                        <figure>
                          <img
                            style={{ width: 215, height: 215, objectFit: "fill"}}
                            src={gal1}
                            alt="figure 1"
                          />
                        </figure>
                      </Col>
                      <Col>
                        <figure>
                          <img
                            style={{ width: 215, height: 215, objectFit: "fill"}}
                            src={gal2}
                            alt="figure 2"
                          />
                        </figure>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <figure>
                          <img
                            style={{ width: 215, height: 215, objectFit: "fill"}}
                            src={gal3}
                            alt="figure 3"
                          />
                        </figure>
                      </Col>
                      <Col>
                        <figure>
                          <img
                            style={{ width: 215, height: 215, objectFit: "fill"}}
                            src={gal4}
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
                            style={{ width: 215, height: 215, objectFit: "fill"}}
                            src={gal5}
                            alt="figure 1"
                          />
                        </figure>
                      </Col>
                      <Col>
                        <figure>
                          <img
                            style={{ width: 215, height: 215, objectFit: "fill"}}
                            src={gal6}
                            alt="figure 2"
                          />
                        </figure>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <figure>
                          <img
                            style={{ width: 215, height: 215, objectFit: "fill"}}
                            src={gal7}
                            alt="figure 3"
                          />
                        </figure>
                      </Col>
                      <Col>
                        <figure>
                          <img
                            style={{ width: 215, height: 215, objectFit: "fill"}}
                            src={gal8}
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
                            style={{ width: 215, height: 215, objectFit: "fill"}}
                            src={gal9}
                            alt="figure 1"
                          />
                        </figure>
                      </Col>
                      <Col>
                        <figure>
                          <img
                            style={{ width: 215, height: 215, objectFit: "fill"}}
                            src={gal10}
                            alt="figure 2"
                          />
                        </figure>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <figure>
                          <img
                            style={{ width: 215, height: 215, objectFit: "fill"}}
                            src={gal11}
                            alt="figure 3"
                          />
                        </figure>
                      </Col>
                      <Col>
                        <figure>
                          <img
                            style={{ width: 215, height: 215, objectFit: "fill"}}
                            src={gal12}
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
                    <Figure>
                      <Figure.Image
                      style={{ width: 300, height: 300}}
                       src="https://via.placeholder.com/300x300"
                       alt="first video label" />
                      <Figure.Caption>First Image</Figure.Caption>
                      
                    </Figure>
                  </Col>
                  <Col>
                    <Figure>
                      <Figure.Image
                      style={{ width: 300, height: 300}}
                       src="https://via.placeholder.com/300x300"
                       alt="second video label" />
                      <Figure.Caption>Second Image</Figure.Caption>
                    </Figure>
                  </Col>
                  <Col>
                    <Figure>
                      <Figure.Image
                      style={{ width: 300, height: 300}}
                       src="https://via.placeholder.com/300x300"
                       alt="third video label" />
                      <Figure.Caption>Third Image</Figure.Caption>
                    </Figure>
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
