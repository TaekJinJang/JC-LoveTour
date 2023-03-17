import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { TextArea } from 'react-bootstrap';

function Board() {
  return (
    <>
      <div>
        <h1>홈</h1>
        <label>Title: </label>
        <input type="text" name="title" />
        <hr></hr>
        <label>작성자: </label>
        <input type="text" name="title" />
        <hr></hr>
        <label>내용: </label>
        <input type="text" name="title" />
        <hr></hr>
      </div>
    </>
  );
}
export default Board;
