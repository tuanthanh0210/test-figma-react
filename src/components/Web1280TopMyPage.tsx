import { FunctionComponent, useState, useCallback } from "react";
import Web390DrawrMenue from "./Web390DrawrMenue";
import PortalPopup from "./PortalPopup";
import styles from "./Web1280TopMyPage.module.css";
const Web1280TopMyPage: FunctionComponent = () => {
  const [isWeb390DrawrMenueOpen, setWeb390DrawrMenueOpen] = useState(false);

  const openWeb390DrawrMenue = useCallback(() => {
    setWeb390DrawrMenueOpen(true);
  }, []);

  const closeWeb390DrawrMenue = useCallback(() => {
    setWeb390DrawrMenueOpen(false);
  }, []);

  const onNaviMemoContainerClick = useCallback(() => {
    // Please sync "Web 1280_myRecord" to the project
  }, []);

  return (
    <>
      <div className={styles.web1280TopMypage}>
        <div className={styles.div} />
        <div className={styles.mainGraph}>
          <div className={styles.div1}>
            <div className={styles.div2}>1</div>
            <div className={styles.div3}>月</div>
          </div>
          <div className={styles.div4}>
            <div className={styles.div5}>5</div>
            <div className={styles.div6}>月</div>
          </div>
          <div className={styles.div7}>
            <div className={styles.div5}>2</div>
            <div className={styles.div6}>月</div>
          </div>
          <div className={styles.div10}>
            <div className={styles.div5}>6</div>
            <div className={styles.div6}>月</div>
          </div>
          <div className={styles.div13}>
            <div className={styles.div14}>9</div>
            <div className={styles.div15}>月</div>
          </div>
          <div className={styles.div16}>
            <div className={styles.div5}>3</div>
            <div className={styles.div6}>月</div>
          </div>
          <div className={styles.div19}>
            <div className={styles.div2}>7</div>
            <div className={styles.div3}>月</div>
          </div>
          <div className={styles.div22}>
            <div className={styles.div23}>10</div>
            <div className={styles.div15}>月</div>
          </div>
          <div className={styles.div25}>
            <div className={styles.div5}>4</div>
            <div className={styles.div6}>月</div>
          </div>
          <div className={styles.div28}>
            <div className={styles.div14}>8</div>
            <div className={styles.div15}>月</div>
          </div>
          <div className={styles.div31}>
            <div className={styles.div14}>11</div>
            <div className={styles.div15}>月</div>
          </div>
          <div className={styles.div34}>
            <div className={styles.div23}>12</div>
            <div className={styles.div15}>月</div>
          </div>
          <img className={styles.icon} alt="" src="/-112.svg" />
          <img className={styles.icon1} alt="" src="/-113.svg" />
          <img className={styles.icon2} alt="" src="/-114.svg" />
        </div>
        <img className={styles.mainPhotoIcon} alt="" src="/main-photo@2x.png" />
        <div className={styles.mainPhotoText}>
          <div className={styles.div37}>
            <div className={styles.div38}>05/21</div>
            <div className={styles.div39}>75%</div>
          </div>
          <img className={styles.icon3} alt="" src="/-50.svg" />
        </div>
        <div className={styles.componentHex}>
          <div className={styles.div40} />
          <img className={styles.icon4} alt="" src="/-48.svg" />
          <div className={styles.morning}>Morning</div>
          <img className={styles.iconKnife} alt="" src="/icon-knife2.svg" />
        </div>
        <div className={styles.componentHex1}>
          <div className={styles.div40} />
          <img className={styles.icon4} alt="" src="/-48.svg" />
          <div className={styles.snack}>Lunch</div>
          <img className={styles.iconKnife} alt="" src="/icon-knife2.svg" />
        </div>
        <div className={styles.componentHex2}>
          <div className={styles.div40} />
          <img className={styles.icon4} alt="" src="/-48.svg" />
          <div className={styles.morning2}>Dinner</div>
          <img className={styles.iconKnife} alt="" src="/icon-knife2.svg" />
        </div>
        <div className={styles.componentHex3}>
          <div className={styles.div40} />
          <img className={styles.icon4} alt="" src="/-48.svg" />
          <div className={styles.snack}>Snack</div>
          <img className={styles.iconCup} alt="" src="/icon-cup.svg" />
        </div>
        <div className={styles.div44}>
          <div className={styles.b939f645db3437589de674292e}>
            <div className={styles.componentPhoto}>
              <img className={styles.m01Icon} alt="" src="/m01@2x.png" />
              <div className={styles.div45} />
              <div className={styles.lunch}>05.21.Morning</div>
            </div>
          </div>
          <div className={styles.d1c06976d7f433c993cFfd8472}>
            <div className={styles.componentPhoto}>
              <img className={styles.m01Icon} alt="" src="/l03@2x.png" />
              <div className={styles.div45} />
              <div className={styles.lunch}>05.21.Lunch</div>
            </div>
          </div>
          <div className={styles.a05a093fF8c3409480c348be19}>
            <div className={styles.componentPhoto}>
              <img className={styles.m01Icon} alt="" src="/d01@2x.png" />
              <div className={styles.div45} />
              <div className={styles.lunch}>05.21.Dinner</div>
            </div>
          </div>
          <div className={styles.c2aaec350a43929eab7877f32f}>
            <div className={styles.componentPhoto}>
              <img className={styles.m01Icon} alt="" src="/l01@2x.png" />
              <div className={styles.div45} />
              <div className={styles.lunch}>05.21.Snack</div>
            </div>
          </div>
          <div className={styles.e222ed1C16a47d5B1eeD74f09c}>
            <div className={styles.componentPhoto}>
              <img className={styles.m01Icon} alt="" src="/m01@2x.png" />
              <div className={styles.div45} />
              <div className={styles.lunch}>05.20.Morning</div>
            </div>
          </div>
          <div className={styles.b0471D2fe48d58cb94a12b41ee}>
            <div className={styles.componentPhoto}>
              <img className={styles.m01Icon} alt="" src="/l02@2x.png" />
              <div className={styles.div45} />
              <div className={styles.lunch}>05.20.Lunch</div>
            </div>
          </div>
          <div className={styles.c2c75ea341674d7bB5dcCe8217}>
            <div className={styles.componentPhoto}>
              <img className={styles.m01Icon} alt="" src="/d02@2x.png" />
              <div className={styles.div45} />
              <div className={styles.lunch}>05.20.Dinner</div>
            </div>
          </div>
          <div className={styles.d479d090799646e3B505C0b5e3}>
            <div className={styles.componentPhoto}>
              <img className={styles.m01Icon} alt="" src="/s01@2x.png" />
              <div className={styles.div45} />
              <div className={styles.lunch}>05.21.Snack</div>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.div53} />
          <div className={styles.div54}>会員登録</div>
          <div className={styles.div55}>運営会社</div>
          <div className={styles.div56}>利用規約</div>
          <div className={styles.div57}>個人情報の取扱について</div>
          <div className={styles.div58}>特定商取引法に基づく表記</div>
          <div className={styles.div59}>お問い合わせ</div>
        </div>
        <div className={styles.componentBtn}>
          <img className={styles.icon8} alt="" src="/-88.svg" />
          <div className={styles.div60}>記録をもっと見る</div>
        </div>
        <img
          className={styles.componentScrollIcon}
          alt=""
          src="/component-scroll.svg"
        />
        <div className={styles.header}>
          <div className={styles.div61} />
          <img className={styles.logoIcon} alt="" src="/logo2.svg" />
          <img
            className={styles.iconMenu}
            alt=""
            src="/icon-menu.svg"
            onClick={openWeb390DrawrMenue}
          />
          <div className={styles.naviMemo} onClick={onNaviMemoContainerClick}>
            <div className={styles.div62} />
            <img className={styles.iconMemo} alt="" src="/icon-memo2.svg" />
            <div className={styles.div63}>自分の記録</div>
          </div>
          <div className={styles.naviMemo1}>
            <div className={styles.div62} />
            <img
              className={styles.iconMemo}
              alt=""
              src="/icon-challenge2.svg"
            />
            <div className={styles.div63}>チャレンジ</div>
          </div>
          <div className={styles.naviMemo2}>
            <div className={styles.div62} />
            <img className={styles.iconMemo} alt="" src="/icon-info.svg" />
            <div className={styles.div63}>お知らせ</div>
            <div className={styles.infoCount}>
              <div className={styles.div68} />
              <div className={styles.clippingGroup}>
                <div className={styles.div69}>1</div>
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
