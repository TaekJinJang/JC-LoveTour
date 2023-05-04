import React, { useCallback, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ImagesOnZoom from './imagesOnZoom';
import Modal from 'react-bootstrap/Modal';

function galleryBoardList({ post }) {
  const [showImagesZoom, setShowImagesZoom] = useState(false);
  const handleClose = () => setShowImagesZoom(false);

  return (
    <>
      {/* 이미지 캐러셀 */}
      <Modal show={showImagesZoom} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Image Carousel</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ImagesOnZoom Images={post.Images} />
        </Modal.Body>
      </Modal>

      <Card style={{ width: '15rem' }}>
        <Card.Img
          variant="top"
          src={post.Images[0].src}
          alt={post.Images[0].src}
        />
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          {/* <Card.Text>{post.content}</Card.Text> */}
          <Button variant="primary" onClick={() => setShowImagesZoom(true)}>
            더 보기
          </Button>
        </Card.Body>
      </Card>
      {/* <ImagesOnZoom /> */}
    </>
  );
}
export default galleryBoardList;
