import { FunctionComponent, useState, useCallback } from "react";
import Web390DrawrMenue from "../components/Web390DrawrMenue";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./Web1280Column.css";
const Web1280Column: FunctionComponent = () => {
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
      <div className="web-1280-column">
        <div className="div177">
          <div className="div178">
            <img className="div178" alt="" src="/-54.svg" />
            <div className="div179">オススメ</div>
            <div className="recommended-column">
              <p className="recommended">RECOMMENDED</p>
              <p className="recommended">COLUMN</p>
            </div>
            <img className="icon17" alt="" src="/-64.svg" />
          </div>
          <div className="div180">
            <img className="div178" alt="" src="/-54.svg" />
            <div className="div179">ダイエット</div>
            <div className="recommended-column">
              <p className="recommended">RECOMMENDED</p>
              <p className="recommended">DIET</p>
            </div>
            <img className="icon17" alt="" src="/-641.svg" />
          </div>
          <div className="div182">
            <img className="div178" alt="" src="/-541.svg" />
            <div className="div179">美容</div>
            <div className="recommended-column">
              <p className="recommended">RECOMMENDED</p>
              <p className="recommended">BEAUTY</p>
            </div>
            <img className="icon17" alt="" src="/-641.svg" />
          </div>
          <div className="div184">
            <img className="div178" alt="" src="/-541.svg" />
            <div className="div179">健康</div>
            <div className="recommended-column">
              <p className="recommended">RECOMMENDED</p>
              <p className="recommended">HEALTH</p>
            </div>
            <img className="icon17" alt="" src="/-641.svg" />
          </div>
        </div>
        <div className="div186">
          <div className="b8fc01ab-19ff-4304-9335-7a5a4c">
            <div className="component-column">
              <img className="icon24" alt="" src="/-2@2x.png" />
              <div className="clipping-group19">
                <div className="div187">
                  魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…
                </div>
              </div>
              <div className="dha-clipping-group">
                <div className="dha">#魚料理 #和食 #DHA</div>
              </div>
              <div className="div188" />
              <div className="div189">2021.05.17 23:25</div>
            </div>
          </div>
          <div className="a56c6-7056-4d2b-a2d0-19e8359c2">
            <div className="component-column">
              <img className="icon24" alt="" src="/-21@2x.png" />
              <div className="clipping-group19">
                <div className="div187">
                  魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…
                </div>
              </div>
              <div className="dha-clipping-group">
                <div className="dha">#魚料理 #和食 #DHA</div>
              </div>
              <div className="div188" />
              <div className="div189">2021.05.17 23:25</div>
            </div>
          </div>
          <div className="e581668c-198f-4f78-98bf-b5d092">
            <div className="component-column">
              <img className="icon24" alt="" src="/-22@2x.png" />
              <div className="clipping-group19">
                <div className="div187">
                  魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…
                </div>
              </div>
              <div className="dha-clipping-group">
                <div className="dha">#魚料理 #和食 #DHA</div>
              </div>
              <div className="div188" />
              <div className="div189">2021.05.17 23:25</div>
            </div>
          </div>
          <div className="b8cb6bb-a201-4127-8c8b-bea3335">
            <div className="component-column">
              <img className="icon24" alt="" src="/-23@2x.png" />
              <div className="clipping-group19">
                <div className="div187">
                  魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…
                </div>
              </div>
              <div className="dha-clipping-group">
                <div className="dha">#魚料理 #和食 #DHA</div>
              </div>
              <div className="div188" />
              <div className="div189">2021.05.17 23:25</div>
            </div>
          </div>
          <div className="ed0880ce-f84e-4a57-a1e6-193576">
            <div className="component-column">
              <img className="icon24" alt="" src="/-24@2x.png" />
              <div className="clipping-group19">
                <div className="div187">
                  魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…
                </div>
              </div>
              <div className="dha-clipping-group">
                <div className="dha">#魚料理 #和食 #DHA</div>
              </div>
              <div className="div188" />
              <div className="div189">2021.05.17 23:25</div>
            </div>
          </div>
          <div className="ce20ae7e-cefb-4aec-8cbf-27fd44">
            <div className="component-column">
              <img className="icon24" alt="" src="/-25@2x.png" />
              <div className="clipping-group19">
                <div className="div187">
                  魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…
                </div>
              </div>
              <div className="dha-clipping-group">
                <div className="dha">#魚料理 #和食 #DHA</div>
              </div>
              <div className="div188" />
              <div className="div189">2021.05.17 23:25</div>
            </div>
          </div>
          <div className="ddc71557-291a-46c7-8063-e467eb">
            <div className="component-column">
              <img className="icon24" alt="" src="/-26@2x.png" />
              <div className="clipping-group19">
                <div className="div187">
                  魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…
                </div>
              </div>
              <div className="dha-clipping-group">
                <div className="dha">#魚料理 #和食 #DHA</div>
              </div>
              <div className="div188" />
              <div className="div189">2021.05.17 23:25</div>
            </div>
          </div>
          <div className="fd1ac70-38ff-48ea-972a-6609d30">
            <div className="component-column">
              <img className="icon24" alt="" src="/-27@2x.png" />
              <div className="clipping-group19">
                <div className="div187">
                  魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…
                </div>
              </div>
              <div className="dha-clipping-group">
                <div className="dha">#魚料理 #和食 #DHA</div>
              </div>
              <div className="div188" />
              <div className="div189">2021.05.17 23:25</div>
            </div>
          </div>
        </div>
        <div className="footer2">
          <div className="div211" />
          <div className="div212">会員登録</div>
          <div className="div213">運営会社</div>
          <div className="div214">利用規約</div>
          <div className="div215">個人情報の取扱について</div>
          <div className="div216">特定商取引法に基づく表記</div>
          <div className="div217">お問い合わせ</div>
        </div>
        <div className="component-btn2">
          <img className="icon32" alt="" src="/-88.svg" />
          <div className="div218">コラムをもっと見る</div>
        </div>
        <img
          className="component-scroll-icon1"
          alt=""
          src="/component-scroll1.svg"
        />
        <div className="header2">
          <div className="div219" />
          <img
            className="logo-icon3"
            alt=""
            src="/logo.svg"
            onClick={onLogoClick}
          />
          <img
            className="icon-menu3"
            alt=""
            src="/icon-menu.svg"
            onClick={openWeb390DrawrMenue}
          />
          <div className="navi-memo6">
            <div className="div220" />
            <img className="icon-memo3" alt="" src="/icon-memo2.svg" />
            <div className="div221">自分の記録</div>
          </div>
          <div className="navi-memo7">
            <div className="div220" />
            <img className="icon-memo3" alt="" src="/icon-challenge2.svg" />
            <div className="div221">チャレンジ</div>
          </div>
          <div className="navi-memo8">
            <div className="div220" />
            <img className="icon-memo3" alt="" src="/icon-info.svg" />
            <div className="div221">お知らせ</div>
            <div className="info-count3">
              <div className="div226" />
              <div className="clipping-group27">
                <div className="div227">1</div>
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

export default Web1280Column;
