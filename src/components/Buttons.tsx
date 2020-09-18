import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Buttons = () => {
  const [inProp, setInProp] = useState(false);
  let btnLinks = [
    {
      name: "Start animation",
      link: "/animation",
    },
    {
      name: "Look at code",
      link: "/",
    },
  ];
  useEffect(() => {
    setTimeout(() => setInProp(true), 1000);
  }, []);
  return (
    <>
      <TransitionGroup>
        <div className="block__buttons">
          {btnLinks.map(({ name, link }, index) => {
            return (
              <CSSTransition
                in={inProp}
                timeout={1000}
                classNames="btn-animation"
                unmountOnExit
                key={link}
              >
                <button>
                  <Link to={`${link}`}>{name}</Link>
                </button>
              </CSSTransition>
            );
          })}
        </div>
      </TransitionGroup>
    </>
  );
};

export default Buttons;
