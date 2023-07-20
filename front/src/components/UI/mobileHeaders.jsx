import React from 'react';
import Offcanvasnav from './offcanvasnav';
import Header from './header';

class MobileHeaders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false
    };
  }

  componentDidMount() {
    // 윈도우의 너비를 기준으로 스마트폰 여부를 판단
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    // 윈도우의 너비를 기준으로 스마트폰 여부를 업데이트
    const isMobile = window.innerWidth <= 768; // 예시로 768px 이하인 경우를 스마트폰으로 간주
    this.setState({ isMobile });
  }

  handleResize = () => {
    clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(this.updateWindowDimensions, 100);
  }

  render() {
    const { isMobile } = this.state;

    return (
      <div>
        {isMobile ? <Offcanvasnav /> : <Header />}
      </div>
    );
  }
}

export default MobileHeaders;
