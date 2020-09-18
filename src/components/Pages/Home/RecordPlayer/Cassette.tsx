import React from "react";

const Cassette = () => {
  return (
    <div className={"cassette_device"}>
      <div className="cassette cassette__image side__front">
        <svg width="40" height="60" transform={"rotate(-90 0 -20)"}>
          <path
            fill="#5454b3"
            d="M1.686,3.327h16.754c0.356,0,0.645-0.288,0.645-0.644c0-0.356-0.288-0.645-0.645-0.645H1.686
                              c-0.356,0-0.644,0.288-0.644,0.645C1.042,3.039,1.33,3.327,1.686,3.327z M4.263,6.549c-0.356,0-0.644,0.288-0.644,0.645
                              c0,0.356,0.288,0.644,0.644,0.644h11.599c0.356,0,0.645-0.288,0.645-0.644c0-0.356-0.288-0.645-0.645-0.645H4.263z M18.439,11.06
                              H1.686c-0.356,0-0.644,0.288-0.644,0.644c0,0.356,0.288,0.645,0.644,0.645h16.754c0.356,0,0.645-0.288,0.645-0.645
                              C19.084,11.348,18.796,11.06,18.439,11.06z M15.218,15.57H5.552c-0.356,0-0.645,0.288-0.645,0.645c0,0.355,0.289,0.644,0.645,0.644
                              h9.666c0.355,0,0.645-0.288,0.645-0.644C15.862,15.858,15.573,15.57,15.218,15.57z"
          ></path>
        </svg>
      </div>
      <div className="cassette side__back" />
      <div className="cassette side__top" />
      <div className="cassette side__bottom" />
      <div className="cassette side__left" />
      <div className="cassette side__right" />
    </div>
  );
};

export default Cassette;
