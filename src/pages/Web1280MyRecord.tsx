import { FunctionComponent, useState, useCallback } from "react";
import Web390DrawrMenue from "../components/Web390DrawrMenue";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./Web1280MyRecord.css";
const Web1280MyRecord: FunctionComponent = () => {
  const [isWeb390DrawrMenueOpen, setWeb390DrawrMenueOpen] = useState(false);
  const navigate = useNavigate();

  const onLogoClick = useCallback(() => {
    navigate("/web-1280-top-mypage");
  }, [navigate]);

  const openWeb390DrawrMenue = useCallback(() => {
    setWeb390DrawrMenueOpen(true);
  }, []);

  const closeWeb390DrawrMenue = useCallback(() => {
    setWeb390DrawrMenueOpen(false);
  }, []);

  return (
    <>
      <div className="web-1280-myrecord">
        <div className="my-diary-clipping-group">
          <div className="my-diary">MY DIARY</div>
        </div>
        <div className="div">
          <div className="component-my-diary-list">
            <div className="component-my-diary-list">
              <div className="div2" />
              <div className="clipping-group">
                <div className="div3">2021.05.21 23:25</div>
              </div>
              <div className="clipping-group1">
                <div className="div4">
                  <p className="p">私の日記の記録が一部表示されます。</p>
                  <p className="p">
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="div5">
            <div className="component-my-diary-list">
              <div className="div2" />
              <div className="clipping-group">
                <div className="div3">2021.05.21 23:25</div>
              </div>
              <div className="clipping-group1">
                <div className="div4">
                  <p className="p">私の日記の記録が一部表示されます。</p>
                  <p className="p">
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="div9">
            <div className="component-my-diary-list">
              <div className="div2" />
              <div className="clipping-group">
                <div className="div3">2021.05.21 23:25</div>
              </div>
              <div className="clipping-group1">
                <div className="div4">
                  <p className="p">私の日記の記録が一部表示されます。</p>
                  <p className="p">
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="div13">
            <div className="component-my-diary-list">
              <div className="div2" />
              <div className="clipping-group">
                <div className="div3">2021.05.21 23:25</div>
              </div>
              <div className="clipping-group1">
                <div className="div4">
                  <p className="p">私の日記の記録が一部表示されます。</p>
                  <p className="p">
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="div17">
            <div className="component-my-diary-list">
              <div className="div2" />
              <div className="clipping-group">
                <div className="div3">2021.05.21 23:25</div>
              </div>
              <div className="clipping-group1">
                <div className="div4">
                  <p className="p">私の日記の記録が一部表示されます。</p>
                  <p className="p">
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="div21">
            <div className="component-my-diary-list">
              <div className="div2" />
              <div className="clipping-group">
                <div className="div3">2021.05.21 23:25</div>
              </div>
              <div className="clipping-group1">
                <div className="div4">
                  <p className="p">私の日記の記録が一部表示されます。</p>
                  <p className="p">
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="div25">
            <div className="component-my-diary-list">
              <div className="div2" />
              <div className="clipping-group">
                <div className="div3">2021.05.21 23:25</div>
              </div>
              <div className="clipping-group1">
                <div className="div4">
                  <p className="p">私の日記の記録が一部表示されます。</p>
                  <p className="p">
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="div29">
            <div className="component-my-diary-list">
              <div className="div2" />
              <div className="clipping-group">
                <div className="div3">2021.05.21 23:25</div>
              </div>
              <div className="clipping-group1">
                <div className="div4">
                  <p className="p">私の日記の記録が一部表示されます。</p>
                  <p className="p">
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-exercise">
          <div className="div33" />
          <div className="my-exercise1">MY EXERCISE</div>
          <div className="div34">2021.05.21</div>
          <div className="div35">
            <div className="div36">
              <div className="component-my-exercise-list">
                <div className="div37">●</div>
                <div className="div38">家事全般（立位・軽い）</div>
                <div className="min">10 min</div>
                <div className="kcal">26kcal</div>
                <img className="icon" alt="" src="/-61.svg" />
              </div>
            </div>
            <div className="div39">
              <div className="component-my-exercise-list">
                <div className="div37">●</div>
                <div className="div38">家事全般（立位・軽い）</div>
                <div className="min">10 min</div>
                <div className="kcal">26kcal</div>
                <img className="icon" alt="" src="/-61.svg" />
              </div>
            </div>
            <div className="div42">
              <div className="component-my-exercise-list">
                <div className="div37">●</div>
                <div className="div38">家事全般（立位・軽い）</div>
                <div className="min">10 min</div>
                <div className="kcal">26kcal</div>
                <img className="icon" alt="" src="/-61.svg" />
              </div>
            </div>
            <div className="div45">
              <div className="component-my-exercise-list">
                <div className="div37">●</div>
                <div className="div38">家事全般（立位・軽い）</div>
                <div className="min">10 min</div>
                <div className="kcal">26kcal</div>
                <img className="icon" alt="" src="/-61.svg" />
              </div>
            </div>
            <div className="div48">
              <div className="component-my-exercise-list">
                <div className="div37">●</div>
                <div className="div38">家事全般（立位・軽い）</div>
                <div className="min">10 min</div>
                <div className="kcal">26kcal</div>
                <img className="icon" alt="" src="/-61.svg" />
              </div>
            </div>
            <div className="div51">
              <div className="component-my-exercise-list">
                <div className="div37">●</div>
                <div className="div38">家事全般（立位・軽い）</div>
                <div className="min">10 min</div>
                <div className="kcal">26kcal</div>
                <img className="icon" alt="" src="/-61.svg" />
              </div>
            </div>
            <div className="div54">
              <div className="component-my-exercise-list">
                <div className="div37">●</div>
                <div className="div38">家事全般（立位・軽い）</div>
                <div className="min">10 min</div>
                <div className="kcal">26kcal</div>
                <img className="icon" alt="" src="/-61.svg" />
              </div>
            </div>
            <div className="div57">
              <div className="component-my-exercise-list">
                <div className="div37">●</div>
                <div className="div38">家事全般（立位・軽い）</div>
                <div className="min">10 min</div>
                <div className="kcal">26kcal</div>
                <img className="icon" alt="" src="/-61.svg" />
              </div>
            </div>
          </div>
          <div className="div60">
            <div className="div61" />
            <div className="div62" />
          </div>
        </div>
        <div className="body-record">
          <div className="div63" />
          <div className="div64" />
          <div className="div65" />
          <div className="div66" />
          <div className="div67" />
          <div className="body-record1">BODY RECORD</div>
          <div className="div68">2021.05.21</div>
          <div className="div69">日</div>
          <div className="div70">週</div>
          <div className="div71">月</div>
          <div className="div72">年</div>
          <div className="div73">
            <div className="div74">
              <div className="div75">1</div>
              <div className="div76">月</div>
            </div>
            <div className="div77">
              <div className="div78">5</div>
              <div className="div79">月</div>
            </div>
            <div className="div80">
              <div className="div75">2</div>
              <div className="div82">月</div>
            </div>
            <div className="div83">
              <div className="div78">6</div>
              <div className="div79">月</div>
            </div>
            <div className="div86">
              <div className="div78">9</div>
              <div className="div79">月</div>
            </div>
            <div className="div89">
              <div className="div78">3</div>
              <div className="div79">月</div>
            </div>
            <div className="div92">
              <div className="div93">7</div>
              <div className="div94">月</div>
            </div>
            <div className="div95">
              <div className="div96">10</div>
              <div className="div97">月</div>
            </div>
            <div className="div98">
              <div className="div78">4</div>
              <div className="div79">月</div>
            </div>
            <div className="div101">
              <div className="div78">8</div>
              <div className="div79">月</div>
            </div>
            <div className="div104">
              <div className="div105">11</div>
              <div className="div106">月</div>
            </div>
            <div className="div107">
              <div className="div108">12</div>
              <div className="div109">月</div>
            </div>
          </div>
          <img className="icon8" alt="" src="/-131.svg" />
          <img className="icon9" alt="" src="/-114.svg" />
          <img className="icon10" alt="" src="/-113.svg" />
        </div>
        <div className="component-record">
          <img className="icon11" alt="" src="/-91.svg" />
          <img
            className="myrecommend-1-icon"
            alt=""
            src="/myrecommend1@2x.png"
          />
          <div className="body-record2">BODY RECORD</div>
          <div className="div110" />
          <div className="div111">自分のカラダの記録</div>
        </div>
        <div className="component-record1">
          <img className="icon11" alt="" src="/-91.svg" />
          <img
            className="myrecommend-2-icon"
            alt=""
            src="/myrecommend2@2x.png"
          />
          <div className="body-record2">MY EXERCISE</div>
          <div className="div110" />
          <div className="div111">自分の運動の記録</div>
        </div>
        <div className="component-record2">
          <img className="icon11" alt="" src="/-91.svg" />
          <img
            className="myrecommend-2-icon"
            alt=""
            src="/myrecommend3@2x.png"
          />
          <div className="body-record2">MY DIARY</div>
          <div className="div110" />
          <div className="div111">自分の日記</div>
        </div>
        <div className="footer">
          <div className="div116" />
          <div className="div117">会員登録</div>
          <div className="div118">運営会社</div>
          <div className="div119">利用規約</div>
          <div className="div120">個人情報の取扱について</div>
          <div className="div121">特定商取引法に基づく表記</div>
          <div className="div122">お問い合わせ</div>
        </div>
        <div className="component-btn">
          <img className="icon11" alt="" src="/-88.svg" />
          <div className="div123">自分の日記をもっと見る</div>
        </div>
        <img
          className="component-scroll-icon"
          alt=""
          src="/component-scroll.svg"
        />
        <div className="header">
          <div className="div124" />
          <img
            className="logo-icon"
            alt=""
            src="/logo.svg"
            onClick={onLogoClick}
          />
          <img
            className="icon-menu"
            alt=""
            src="/icon-menu.svg"
            onClick={openWeb390DrawrMenue}
          />
          <div className="navi-memo">
            <div className="div125" />
            <img className="icon-memo" alt="" src="/icon-memo.svg" />
            <div className="div126">自分の記録</div>
          </div>
          <div className="navi-memo1">
            <div className="div125" />
            <img className="icon-memo" alt="" src="/icon-challenge.svg" />
            <div className="div126">チャレンジ</div>
          </div>
          <div className="navi-memo2">
            <div className="div125" />
            <img className="icon-memo" alt="" src="/icon-info.svg" />
            <div className="div126">お知らせ</div>
            <div className="info-count">
              <div className="div131" />
              <div className="clipping-group16">
                <div className="div132">1</div>
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

export default Web1280MyRecord;
