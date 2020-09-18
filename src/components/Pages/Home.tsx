import React, { useEffect, useState } from "react";
import Buttons from "./../Buttons";
import RecordPlayer from "./Home/RecordPlayer/RecordPlayer";
import { CSSTransition } from "react-transition-group";

const Home: React.FC<any> = () => {
  const [inProp, setInProp] = useState(false);
  useEffect(() => {
    setTimeout(() => setInProp(true), 2000);
  }, []);
  return (
    <div>
      <Buttons />
      <CSSTransition
        in={inProp}
        timeout={2000}
        classNames="my-node"
        unmountOnExit
      >
        <div>
          <div className="record_player__block">
            <RecordPlayer />
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Home;
