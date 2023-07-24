import { FunctionComponent, useCallback } from "react";
import styles from "./Web390DrawrMenue.module.css";

type Web390DrawrMenueType = {
  onClose?: () => void;
};

const Web390DrawrMenue: FunctionComponent<Web390DrawrMenueType> = ({
  onClose,
}) => {
  const onComponentDropdownMenuContainerClick = useCallback(() => {
    // Please sync "Web 1280_myRecord" to the project
  }, []);

  const onComponentDropdownMenuContainer4Click = useCallback(() => {
    // Please sync "Web 1280_Column" to the project
  }, []);

  return (
    <div className={styles.web390Drawrmenue}>
      <div className={styles.div} />
      <div
        className={styles.componentDropdownMenu}
        onClick={onComponentDropdownMenuContainerClick}
      >
        <div className={styles.div1} />
        <div className={styles.div2}>自分の記録</div>
        <div className={styles.div3} />
        <div className={styles.div4} />
      </div>
      <div className={styles.componentDropdownMenu1}>
        <div className={styles.div1} />
        <div className={styles.div2}>体重グラフ</div>
        <div className={styles.div3} />
        <div className={styles.div4} />
      </div>
      <div className={styles.componentDropdownMenu2}>
        <div className={styles.div1} />
        <div className={styles.div2}>目標</div>
        <div className={styles.div3} />
        <div className={styles.div4} />
      </div>
      <div className={styles.componentDropdownMenu3}>
        <div className={styles.div1} />
        <div className={styles.div2}>選択中のコース</div>
        <div className={styles.div3} />
        <div className={styles.div4} />
      </div>
      <div
        className={styles.componentDropdownMenu4}
        onClick={onComponentDropdownMenuContainer4Click}
      >
        <div className={styles.div1} />
        <div className={styles.div2}>コラム一覧</div>
        <div className={styles.div3} />
        <div className={styles.div4} />
      </div>
      <div className={styles.componentDropdownMenu5}>
        <div className={styles.div1} />
        <div className={styles.div2}>設定</div>
        <div className={styles.div3} />
        <div className={styles.div4} />
      </div>
      <img className={styles.iconClose} alt="" src="/icon-close.svg" />
    </div>
  );
};

export default Web390DrawrMenue;
