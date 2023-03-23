import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';

function imagesOnZoom() {
  const Overlay = styled.div`
    position: fixed;
    z-index: 5000;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  `;
  // const SlickWrapper = styled(Carousel.Item)`
  //   height: calc(100% - 70px);
  //   background: #090909;
  // `;
  const ResizeImg = styled.img`
    height: '400px';
    width: '300px';
  `;
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg"
          alt="First slide"
          style={{ width: '400px', height: '700px' }}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg"
          alt="Second slide"
          style={{ width: '400px', height: '700px' }}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default imagesOnZoom;
