import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Web390DrawrMenue.css";

type Web390DrawrMenueType = {
  onClose?: () => void;
};

const Web390DrawrMenue: FunctionComponent<Web390DrawrMenueType> = ({
  onClose,
}) => {
  const navigate = useNavigate();

  const onComponentDropdownMenuContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onComponentDropdownMenuContainer4Click = useCallback(() => {
    navigate("/web-1280-column");
  }, [navigate]);

  return (
    <div className="web-390-drawrmenue">
      <div className="div133" />
      <div
        className="component-dropdown-menu"
        onClick={onComponentDropdownMenuContainerClick}
      >
        <div className="div134" />
        <div className="div135">自分の記録</div>
        <div className="div136" />
        <div className="div137" />
      </div>
      <div className="component-dropdown-menu1">
        <div className="div134" />
        <div className="div135">体重グラフ</div>
        <div className="div136" />
        <div className="div137" />
      </div>
      <div className="component-dropdown-menu2">
        <div className="div134" />
        <div className="div135">目標</div>
        <div className="div136" />
        <div className="div137" />
      </div>
      <div className="component-dropdown-menu3">
        <div className="div134" />
        <div className="div135">選択中のコース</div>
        <div className="div136" />
        <div className="div137" />
      </div>
      <div
        className="component-dropdown-menu4"
        onClick={onComponentDropdownMenuContainer4Click}
      >
        <div className="div134" />
        <div className="div135">コラム一覧</div>
        <div className="div136" />
        <div className="div137" />
      </div>
      <div className="component-dropdown-menu5">
        <div className="div134" />
        <div className="div135">設定</div>
        <div className="div136" />
        <div className="div137" />
      </div>
      <img className="icon-close" alt="" src="/icon-close.svg" />
    </div>
  );
};

export default Web390DrawrMenue;
