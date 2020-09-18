import React from "react";

const Radio = () => {
  return (
    <div className={"radio__device"}>
      <div className="radio side__front">
        <div className="radio__line">
          <div className="radio__line_white">
            <span className="radio__line_block" />
          </div>
        </div>
      </div>
      <div className="radio side__back" />
      <div className="radio side__top" />
      <div className="radio side__bottom" />
      <div className="radio side__left" />
      <div className="radio side__right" />
    </div>
  );
};

export default Radio;
