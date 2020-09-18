import React from "react";

const Handle = () => {
  return (
    <div className="handle">
      <div className="handle_right">
        <div className="handle side__front" />
        <div className="handle side__back" />
        <div className="handle side__top" />
        <div className="handle side__bottom" />
        <div className="handle side__left" />
        <div className="handle side__right">
          <svg>
            <circle cx="10" cy="135" r="4" fill="#f1f1f1" />
          </svg>
        </div>
      </div>
      <div className="handle_left">
        <div className="handle side__front" />
        <div className="handle side__back" />
        <div className="handle side__top" />
        <div className="handle side__bottom" />
        <div className="handle side__left" />
        <div className="handle side__right" />
      </div>
      <div className="handle_top">
        <div className="handle_side__top side__front" />
        <div className="handle_side__top side__back" />
        <div className="handle_side__top side__top" />
        <div className="handle_side__top side__bottom" />
        <div className="handle_side__top side__left" />
        <div className="handle_side__top side__right" />
      </div>
    </div>
  );
};

export default Handle;
