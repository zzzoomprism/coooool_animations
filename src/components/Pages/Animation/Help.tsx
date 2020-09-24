import React from "react";

type PropsType = {
  direction: boolean;
  isGo: boolean;
};

const Help: React.FC<PropsType> = React.memo(({ direction, isGo }) => {
  console.log(direction);
  return (
    <div>
      <h4 className="little_help">Use your arrows or WASD :)</h4>;
      <div className="arrow_btns">
        <span className="arrow_top_btn">
          <i className="fas fa-long-arrow-alt-up"></i>
        </span>
        <span
          className="arrow_right_btn"
          style={{
            backgroundColor: `${direction && isGo ? "#faf16db2" : "#f1f1f16b"}`,
          }}
        >
          <i className="fas fa-long-arrow-alt-right"></i>
        </span>
        <span className="arrow_bottom_btn">
          <i className="fas fa-long-arrow-alt-down"></i>
        </span>
        <span
          className="arrow_left_btn"
          style={{
            backgroundColor: `${
              !direction && isGo ? "#faf16db2" : "#f1f1f16b"
            }`,
          }}
        >
          <i className="fas fa-long-arrow-alt-left"></i>
        </span>
      </div>
    </div>
  );
});

export default Help;
