import React from "react";

const Speakers = () => {
  let speakersArray = ["left", "right"];
  let speakersDiv = speakersArray.map((el) => {
    return (
      <div key={`speaker_${el}`} className={`speaker__${el}`}>
        <div className="speaker side__front" />
        <div className="speaker side__back" />
        <div className="speaker side__top" />
        <div className="speaker side__bottom" />
        <div className="speaker side__left" />
        <div className="speaker side__right" />
      </div>
    );
  });
  return <>{speakersDiv}</>;
};

export default Speakers;
