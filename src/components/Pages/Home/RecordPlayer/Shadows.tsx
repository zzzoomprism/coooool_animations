import React from "react";

const Shadows = () => {
  return (
    <div>
      <svg width="320" height="200" className="shadow__main">
        <path
          d={"M 0 200 L 0 0 300 0 295 40 320 80 320 200"}
          fill={"#743e55"}
        />
      </svg>
      <svg width="75" height="75" className="shadow__speaker_left">
        <rect x="0" y="0" width="75" height="75" fill="#44444418" />
      </svg>
      <svg width="75" height="78" className="shadow__speaker_left">
        <rect
          x="0"
          y="0"
          width="78.
        "
          height="75"
          fill="#44444418"
        />
      </svg>
      <svg width="75" height="78" className="shadow__cassette">
        <rect x="0" y="0" width="78" height="71" fill="#44444418" />
      </svg>
      <svg width="75" height="78" className="shadow__speaker_right">
        <defs>
          <filter id="f1" x="0" y="0">
            <feGaussianBlur in="SourceGraphic" stdDeviation="" />
          </filter>
        </defs>
        <rect
          x="0"
          y="0"
          width="75"
          height="78"
          fill="#44444418"
          filter="url(#f1)"
        />
      </svg>
      <svg width="280" height="80" className="shadow__button_top">
        <rect x="29" y="60" width="28" height="16" fill=" #33333352" />
        <rect x="107" y="60" width="63" height="16" fill=" #33333352" />
        <rect x="247" y="60" width="17" height="16" fill=" #33333352" />
      </svg>
    </div>
  );
};

export default Shadows;
