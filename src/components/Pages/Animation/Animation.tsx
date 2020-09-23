import React, { useEffect, useState } from "react";
import Person from "./Person";
import { CSSTransition } from "react-transition-group";
import Help from "./Help";

const Animation = () => {
  let a = 0;
  const [isGo, setIsGo] = useState<boolean>(false);
  const [backgroundPosition, setBackgroundPosition] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const [showText, setShowText] = useState({
    text1: false,
    text2: false,
    text3: false,
  });
  const handleDPress = (event: any) => {
    if (event.key === "d" || event.keyCode === 39) {
      setIsGo(true);
      setIsForward(true);
      a += 4;
      setBackgroundPosition(a);
      if (a >= 150) setShowText({ ...showText, text1: true });
    }
    if (event.key === "a" || event.keyCode === 37) {
      setIsGo(true);
      setIsForward(false);
      a -= 4;
      setBackgroundPosition(a);
    }
  };
  const handleDUp = (event: any) => {
    if (event.key === "d") {
      setIsGo(false);
    } else setIsGo(false);
  };
  useEffect(() => {
    document.addEventListener("keydown", handleDPress, false);
    document.addEventListener("keyup", handleDUp, false);
    return () => {
      document.removeEventListener("keydown", handleDPress, false);
      document.removeEventListener("keyup", handleDUp, false);
    };
  }, []);

  return (
    <div className="animation__block">
      <Help />
      <div className="background_animation">
        <div className="background_animation_item">
          <img
            src="https://i.pinimg.com/originals/78/81/2f/78812fd262025d24e53452a1307bbb6d.png"
            className="background_image"
            alt="background"
            style={{ left: `calc(0% - ${backgroundPosition}px` }}
          />
          <CSSTransition
            in={showText.text1}
            timeout={1000}
            classNames="my-node"
            unmountOnExit
            appear
          >
            <div
              className={"background_animation_item__text"}
              style={{ left: `calc(30% - ${backgroundPosition}px` }}
            >
              <h3 className="mt-3">Hello Guys!</h3>
              <p>made by Aliaksandra Susha</p>
              <p> Technologies : React, SCSS, React-transition-group</p>
            </div>
          </CSSTransition>
        </div>

        <img
          src="https://i.pinimg.com/originals/78/81/2f/78812fd262025d24e53452a1307bbb6d.png"
          className="background_image img2"
          alt="background"
          style={{
            left: `calc(100% - ${backgroundPosition}px`,
            transform: "scale(-1, 1)",
          }}
        />
        <img
          src="https://i.pinimg.com/originals/78/81/2f/78812fd262025d24e53452a1307bbb6d.png"
          className="background_image img3"
          alt="background"
          style={{ left: `calc(200% - ${backgroundPosition}px` }}
        />
      </div>
      <Person isGo={isGo} isForward={isForward} />
    </div>
  );
};

export default Animation;
