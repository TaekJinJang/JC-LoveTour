import React, { useCallback, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SupportBenefitBoardView from '../components/Board/supportBenefitBoardView';
import Header from '../components/UI/header';
// import { TextArea } from 'react-bootstrap';

// 공통부분
import Footer from '../components/UI/footer';

function supportBenefitBoard() {
    return (
        <>
            <SupportBenefitBoardView />
        </>
    );
}
export default supportBenefitBoard;
