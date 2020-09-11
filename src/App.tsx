import React from "react";
import "./style/_main.scss";

const App = () => {
  return (
    <div className="App">
      <section id={"object"}>
        <div className="face side__front" />
        <div className="face side__back" />
        <div className="face side__top" />
        <div className="face side__bottom" />
        {/* <div className="face side__left" /> */}
        <div className="face side__right" />

        {/* <div className={"speakers"}>
          <div className="speaker side__front" />
          <div className="speaker side__back" />
          <div className="speaker side__top" />
          <div className="speaker side__bottom" />
          <div className="speaker side__left" />
          <div className="speaker side__right" />
        </div> */}
      </section>
    </div>
  );
};

export default App;
