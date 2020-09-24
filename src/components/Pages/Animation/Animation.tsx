import React, { useEffect, useState } from "react";
import Person from "./Person";
import { CSSTransition } from "react-transition-group";
import Help from "./Help";

const Animation = React.memo(() => {
  let a = 0;
  const [isGo, setIsGo] = useState<boolean>(false);
  const [backgroundPosition, setBackgroundPosition] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const [showText, setShowText] = useState<any>({
    text1: false,
    text2: false,
    text3: false,
  });
  const handleDPress = (event: any) => {
    if (event.keyCode === 39) {
      setIsGo(true);
      setIsForward(true);
      if (a <= 180) a += 0.3;
      setBackgroundPosition(a);
      if (Math.floor(a) === 10) setShowText({ ...showText, text1: true });
      if (Math.floor(a) === 80)
        setShowText({ ...showText, text1: true, text2: true });
      if (Math.floor(a) === 100)
        setShowText({ ...showText, text1: true, text2: true, text3: true });
    }

    if (event.keyCode === 37) {
      setIsGo(true);
      setIsForward(false);
      if (a >= 10) a -= 0.3;
      setBackgroundPosition(a);
    }
  };
  const handleDUp = (event: any) => {
    setIsGo(false);
  };
  useEffect(() => {
    document.addEventListener("keydown", handleDPress, false);
    document.addEventListener("keyup", handleDUp, false);
    return () => {
      document.removeEventListener("keydown", handleDPress, false);
      document.removeEventListener("keyup", handleDUp, false);
    };
  }, []);
  let background_options = [
    {
      style: { left: `calc(0% - ${backgroundPosition}%` },
      text: (
        <div
          className={"background_animation_item__text"}
          style={{ left: `calc(30% - ${backgroundPosition}%` }}
        >
          <h3 className="mt-3">Hello Guys!</h3>
          <p>made by Aliaksandra Susha</p>
          <p> Technologies : React, SCSS, React-transition-group</p>
        </div>
      ),
    },
    {
      style: {
        left: `calc(100% - ${backgroundPosition}%`,
        transform: "scale(-1, 1)",
      },
      text: (
        <div
          className={"background_animation_item__text"}
          style={{ left: `calc(120% - ${backgroundPosition}%` }}
        >
          <h3 className="mt-3">Hello Guys!</h3>
          <p>made by Aliaksandra Susha</p>
          <p> Technologies : React, SCSS, React-transition-group</p>
        </div>
      ),
    },
    {
      style: { left: `calc(200% - ${backgroundPosition}%` },
      text: (
        <div
          className={"background_animation_item__text"}
          style={{ left: `calc(190% - ${backgroundPosition}%` }}
        >
          <h3 className="mt-3">Hello Guys!</h3>
          <p>made by Aliaksandra Susha</p>
          <p> Technologies : React, SCSS, React-transition-group</p>
        </div>
      ),
    },
  ];

  let background_div = background_options.map((el, index) => {
    console.log(index);
    return (
      <div className="background_animation_item">
        <img
          src="https://i.pinimg.com/originals/78/81/2f/78812fd262025d24e53452a1307bbb6d.png"
          className="background_image"
          alt="background"
          style={el.style}
        />
        <CSSTransition
          in={showText[`text${index + 1}`]}
          timeout={1000}
          classNames="my-node"
          unmountOnExit
          appear
        >
          {el.text}
        </CSSTransition>
      </div>
    );
  });
  return (
    <div className="animation__block">
      {console.log(backgroundPosition)}
      <Help direction={isForward} isGo={isGo} />
      <div className="background_animation">{background_div}</div>
      <Person isGo={isGo} isForward={isForward} />
    </div>
  );
});

export default Animation;
