import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GroupComponent.module.css";

export type GroupComponentType = {
  tRAVELLER?: string;
  iconamoonprofileFill?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propLeft1?: CSSProperties["left"];
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  tRAVELLER,
  iconamoonprofileFill,
  propTop,
  propLeft,
  propLeft1,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const tRAVELLERStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  return (
    <div className={styles.rectangleParent} style={groupDivStyle}>
      <div className={styles.groupChild} />
      <div className={styles.traveller} style={tRAVELLERStyle}>
        {tRAVELLER}
      </div>
      <img
        className={styles.iconamoonprofileFill}
        alt=""
        src={iconamoonprofileFill}
      />
    </div>
  );
};

export default GroupComponent;
