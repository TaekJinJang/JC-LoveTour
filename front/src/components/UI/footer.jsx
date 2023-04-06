import './footer.css';

function footer() {
  return (
    <>
      <div id="footer">
        <div className="footer_wrap">
          <div className="footer_container">
            <div className="footer_navi">
              <ul className="no_dot">
                <li id="footer_navi_item">
                  <a href="/etc/private.html">개인정보처리방침 </a>
                </li>
                <li id="footer_navi_item">
                  <a href="/etc/copyright.html">저작권보호정책 </a>
                </li>
                <li id="footer_navi_item">
                  <a href="/etc/agreement.html">이용약관</a>
                </li>
              </ul>
            </div>
            <div className="footer_info">
              <br></br>
              <p>&#40;12345&#41; 충청북도 제천시 세명로</p>
              <p>COPYRIGHT jecheon-do.All Right resreved.</p>
            </div>
            <div className="full_logo">
              <div className="in_logo">
                <span className="f_logo">
                  <b>러브투어</b>
                </span>
                <span className="L_logo">
                  <b>JECHEON</b>
                </span>
                <select id="footer_select">
                  <option value="null">유관기관1</option>
                  <option value="null">유관기관2</option>
                  <option value="null">유관기관3</option>
                  <option value="null">유관기관4</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default footer;
