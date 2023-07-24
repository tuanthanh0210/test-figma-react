import { FunctionComponent, useState, useCallback } from "react";
import Web390DrawrMenue from "./Web390DrawrMenue";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import "./Web1280TopMyPage.css";
const Web1280TopMyPage: FunctionComponent = () => {
  const [isWeb390DrawrMenueOpen, setWeb390DrawrMenueOpen] = useState(false);
  const navigate = useNavigate();

  const openWeb390DrawrMenue = useCallback(() => {
    setWeb390DrawrMenueOpen(true);
  }, []);

  const closeWeb390DrawrMenue = useCallback(() => {
    setWeb390DrawrMenueOpen(false);
  }, []);

  const onNaviMemoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <div className="web-1280-top-mypage">
        <div className="div236" />
        <div className="main-graph">
          <div className="div237">
            <div className="div238">1</div>
            <div className="div239">月</div>
          </div>
          <div className="div240">
            <div className="div241">5</div>
            <div className="div242">月</div>
          </div>
          <div className="div243">
            <div className="div241">2</div>
            <div className="div242">月</div>
          </div>
          <div className="div246">
            <div className="div241">6</div>
            <div className="div242">月</div>
          </div>
          <div className="div249">
            <div className="div250">9</div>
            <div className="div251">月</div>
          </div>
          <div className="div252">
            <div className="div241">3</div>
            <div className="div242">月</div>
          </div>
          <div className="div255">
            <div className="div238">7</div>
            <div className="div239">月</div>
          </div>
          <div className="div258">
            <div className="div259">10</div>
            <div className="div251">月</div>
          </div>
          <div className="div261">
            <div className="div241">4</div>
            <div className="div242">月</div>
          </div>
          <div className="div264">
            <div className="div250">8</div>
            <div className="div251">月</div>
          </div>
          <div className="div267">
            <div className="div250">11</div>
            <div className="div251">月</div>
          </div>
          <div className="div270">
            <div className="div259">12</div>
            <div className="div251">月</div>
          </div>
          <img className="icon36" alt="" src="/-112.svg" />
          <img className="icon37" alt="" src="/-1131.svg" />
          <img className="icon38" alt="" src="/-1141.svg" />
        </div>
        <img className="main-photo-icon" alt="" src="/main-photo@2x.png" />
        <div className="main-photo-text">
          <div className="div273">
            <div className="div274">05/21</div>
            <div className="div275">75%</div>
          </div>
          <img className="icon39" alt="" src="/-50.svg" />
        </div>
        <div className="component-hex1">
          <div className="div276" />
          <img className="icon40" alt="" src="/-48.svg" />
          <div className="morning1">Morning</div>
          <img className="icon-knife2" alt="" src="/icon-knife2.svg" />
        </div>
        <div className="component-hex2">
          <div className="div276" />
          <img className="icon40" alt="" src="/-48.svg" />
          <div className="snack">Lunch</div>
          <img className="icon-knife2" alt="" src="/icon-knife2.svg" />
        </div>
        <div className="component-hex3">
          <div className="div276" />
          <img className="icon40" alt="" src="/-48.svg" />
          <div className="morning3">Dinner</div>
          <img className="icon-knife2" alt="" src="/icon-knife2.svg" />
        </div>
        <div className="component-hex4">
          <div className="div276" />
          <img className="icon40" alt="" src="/-48.svg" />
          <div className="snack">Snack</div>
          <img className="icon-cup1" alt="" src="/icon-cup.svg" />
        </div>
        <div className="div280">
          <div className="b939f64-5db3-4375-89de-674292e">
            <div className="component-photo">
              <img className="m01-icon" alt="" src="/m01@2x.png" />
              <div className="div281" />
              <div className="lunch">05.21.Morning</div>
            </div>
          </div>
          <div className="d1c0697-6d7f-433c-993c-ffd8472">
            <div className="component-photo">
              <img className="m01-icon" alt="" src="/l03@2x.png" />
              <div className="div281" />
              <div className="lunch">05.21.Lunch</div>
            </div>
          </div>
          <div className="a05a093f-f8c3-4094-80c3-48be19">
            <div className="component-photo">
              <img className="m01-icon" alt="" src="/d01@2x.png" />
              <div className="div281" />
              <div className="lunch">05.21.Dinner</div>
            </div>
          </div>
          <div className="c2aaec-350a-4392-9eab-7877f32f">
            <div className="component-photo">
              <img className="m01-icon" alt="" src="/l01@2x.png" />
              <div className="div281" />
              <div className="lunch">05.21.Snack</div>
            </div>
          </div>
          <div className="e222ed1-c16a-47d5-b1ee-d74f09c">
            <div className="component-photo">
              <img className="m01-icon" alt="" src="/m01@2x.png" />
              <div className="div281" />
              <div className="lunch">05.20.Morning</div>
            </div>
          </div>
          <div className="b0471-d2fe-48d5-8cb9-4a12b41ee">
            <div className="component-photo">
              <img className="m01-icon" alt="" src="/l02@2x.png" />
              <div className="div281" />
              <div className="lunch">05.20.Lunch</div>
            </div>
          </div>
          <div className="c2c75ea3-4167-4d7b-b5dc-ce8217">
            <div className="component-photo">
              <img className="m01-icon" alt="" src="/d02@2x.png" />
              <div className="div281" />
              <div className="lunch">05.20.Dinner</div>
            </div>
          </div>
          <div className="d479d090-7996-46e3-b505-c0b5e3">
            <div className="component-photo">
              <img className="m01-icon" alt="" src="/s01@2x.png" />
              <div className="div281" />
              <div className="lunch">05.21.Snack</div>
            </div>
          </div>
        </div>
        <div className="footer3">
          <div className="div289" />
          <div className="div290">会員登録</div>
          <div className="div291">運営会社</div>
          <div className="div292">利用規約</div>
          <div className="div293">個人情報の取扱について</div>
          <div className="div294">特定商取引法に基づく表記</div>
          <div className="div295">お問い合わせ</div>
        </div>
        <div className="component-btn3">
          <img className="icon44" alt="" src="/-88.svg" />
          <div className="div296">記録をもっと見る</div>
        </div>
        <img
          className="component-scroll-icon2"
          alt=""
          src="/component-scroll1.svg"
        />
        <div className="header3">
          <div className="div297" />
          <img className="logo-icon4" alt="" src="/logo2.svg" />
          <img
            className="icon-menu4"
            alt=""
            src="/icon-menu.svg"
            onClick={openWeb390DrawrMenue}
          />
          <div className="navi-memo9" onClick={onNaviMemoContainerClick}>
            <div className="div298" />
            <img className="icon-memo4" alt="" src="/icon-memo2.svg" />
            <div className="div299">自分の記録</div>
          </div>
          <div className="navi-memo10">
            <div className="div298" />
            <img className="icon-memo4" alt="" src="/icon-challenge2.svg" />
            <div className="div299">チャレンジ</div>
          </div>
          <div className="navi-memo11">
            <div className="div298" />
            <img className="icon-memo4" alt="" src="/icon-info.svg" />
            <div className="div299">お知らせ</div>
            <div className="info-count4">
              <div className="div304" />
              <div className="clipping-group30">
                <div className="div305">1</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isWeb390DrawrMenueOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeWeb390DrawrMenue}
        >
          <Web390DrawrMenue onClose={closeWeb390DrawrMenue} />
        </PortalPopup>
      )}
    </>
  );
};

export default Web1280TopMyPage;
