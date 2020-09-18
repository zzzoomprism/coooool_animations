import React from "react";

const SmallButtons = () => {
  let divArray = [0, 1, 2, 3, 4];
  let smallButtons = divArray.map((el, index) => {
    return (
      <div key={`small_button_${index}`} className={`small_button__${index}`}>
        <div className="button_yellow side__front" />
        <div className="button_yellow side__back" />
        <div className="button_yellow side__top" />
        <div className="button_yellow side__bottom" />
        <div className="button_yellow side__left" />
        <div className="button_yellow side__right" />
      </div>
    );
  });
  return <>{smallButtons}</>;
};

export default SmallButtons;
