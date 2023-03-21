import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function addBoard() {
  return (
    <>
      <div>
        <h1>게시판</h1>
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
export default addBoard;
