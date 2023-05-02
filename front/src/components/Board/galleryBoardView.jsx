import React, { useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import {
  Container,
  Row,
  Col,
  ButtonGroup,
  Button,
  Card,
  Stack,
  Form,
} from 'react-bootstrap';

import GalleryBoardList from './galleryBoardList';
import { useSelector } from 'react-redux';

const GreenCol = styled(Col)`
  background-color: green;
`;

function galleryBoardView() {
  const { gallery } = useSelector((state) => state.post);
  return (
    <>
      <Container>
        <Row>
          <GreenCol>
            <ButtonGroup aria-label="Grid 1 Buttons">
              <Button variant="Success">Button 1</Button>
              <Button variant="Success">Button 2</Button>
              <Button variant="Success">Button 3</Button>
              <Button variant="Success">Button 4</Button>
              <Button variant="Success">Button 5</Button>
            </ButtonGroup>
          </GreenCol>
        </Row>
        <Row className="mt-4">
          <Col md={3} className="d-grid gap-2">
            <Card bg="success" text="white">
              <Card.Body>
                <Card.Title className="my-3 mx-3">Card Title</Card.Title>
                <Card.Title
                  className="my-3 mx-3"
                  style={{ fontWeight: 'bold' }}
                >
                  Card Title
                </Card.Title>
              </Card.Body>
            </Card>
            <ButtonGroup vertical>
              <Button
                variant="outline-success"
                className="mb-3"
                size="lg"
                block
              >
                Block Button 1
              </Button>
              <Button
                variant="outline-success"
                className="mb-3"
                size="lg"
                block
              >
                Block Button 2
              </Button>
              <Button
                variant="outline-success"
                className="mb-3"
                size="lg"
                block
              >
                Block Button 3
              </Button>
              <Button
                variant="outline-success"
                className="mb-3"
                size="lg"
                block
              >
                Block Button 4
              </Button>
              <Button
                variant="outline-success"
                className="mb-3"
                size="lg"
                block
              >
                Block Button 5
              </Button>
              {/* block button 세로 길이 조정 */}
            </ButtonGroup>
          </Col>
          <Col md={9}>
            <Row>
              <h2>Example heading</h2>
            </Row>
            <Row>
              <Col className="bg-light border">
                <Form.Select>
                  <option>전체</option>
                  <option value="1">최신순</option>
                  <option value="2">게시글순</option>
                  <option value="3">왓에버순</option>
                </Form.Select>
                <Stack direction="horizontal" gap={3}>
                  <Form.Control
                    className="ms-auto"
                    placeholder="Add your item here..."
                  />
                  <Button variant="success" text="white">
                    검색
                  </Button>
                </Stack>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col>
                <Row>
                  <Col md={4}>
                    {gallery.map((post, index) => (
                      <GalleryBoardList key={post.id} post={post} />
                    ))}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default galleryBoardView;
