import React, { useCallback, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ImagesOnZoom from './imagesOnZoom';
import { Modal } from 'react-bootstrap';

function galleryBoardList({ post }) {
  const [showImagesZoom, setShowImagesZoom] = useState(false);
  const onZoom = useCallback(() => {
    setShowImagesZoom(true);
    return (
      <>
        <Modal
          show={showImagesZoom}
          onHide={() => setShowCarousel(false)}
          size="lg"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Image Carousel</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ImagesOnZoom />
          </Modal.Body>
        </Modal>
      </>
    );
  }, []);
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img
          variant="top"
          src={post.Images[0].src}
          alt={post.Images[0].src}
          onClick={() => setShowImagesZoom(true)}
        />
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.content}</Card.Text>
          <Button variant="primary" onClick={onZoom}>
            더 보기
          </Button>
        </Card.Body>
      </Card>
      {/* <ImagesOnZoom /> */}
    </>
  );
}
export default galleryBoardList;
