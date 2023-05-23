import React, { useCallback, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ImagesOnZoom from './imagesOnZoom';
import Modal from 'react-bootstrap/Modal';
import { Col } from 'react-bootstrap';

function galleryBoardList({ post }) {
  const [showImagesZoom, setShowImagesZoom] = useState(false);
  const handleClose = () => setShowImagesZoom(false);

  return (
    <>
      <Col md={4}>
        {/* {console.log(post)} */}
        {/* 이미지 캐러셀 */}
        <Modal show={showImagesZoom} onHide={handleClose} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title>Image Carousel</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ImagesOnZoom Images={post.Images} />
          </Modal.Body>
        </Modal>

        <Card style={{ width: '15rem' }} className="mb-3">
          <Card.Img
            variant="top"
            width={230}
            height={230}
            src={post.Images[0].src}
            alt={post.Images[0].src}
          />
          <Card.Body>
            <Card.Title className="text-center mt-1 mb-4">
              <h4>{post.title}</h4>
            </Card.Title>
            {/*             <Card.Text>{post.content}</Card.Text>*/}
            <Card.Text
              style={{
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                color: 'gray',
              }}
            >
              <p>제목</p>
            </Card.Text>
            <Button variant="primary" onClick={() => setShowImagesZoom(true)}>
              더 보기
            </Button>
          </Card.Body>
        </Card>
      </Col>

      {/* <ImagesOnZoom /> */}
    </>
  );
}
export default galleryBoardList;
