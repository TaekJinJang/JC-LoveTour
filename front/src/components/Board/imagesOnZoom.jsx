import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';

function imagesOnZoom({ Images }) {
  // const SlickWrapper = styled(Carousel.Item)`
  //   height: calc(100% - 70px);
  //   background: #090909;
  // `;
  console.log(Images);
  return (
    <Carousel fade>
      {Images.map((image, index) => (
        <Carousel.Item key={image.id}>
          <img
            className="d-block w-100"
            src={image.src}
            alt="First slide"
            style={{ width: '400px', height: '500px' }}
          />
          <Carousel.Caption>
            <h3>{image.captionTitle}</h3>
            <p>{image.captionContent}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default imagesOnZoom;
