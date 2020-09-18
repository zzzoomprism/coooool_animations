import React from "react";

type PropsType = {
  count: number;
  color: "white" | "yellow" | "blue";
  left: number;
  animation?: boolean;
  animationElement?: Array<number>;
};

const TopButtons: React.FC<PropsType> = ({
  count,
  color,
  left,
  animation,
  animationElement = [1],
}) => {
  let topButtonArray = [];
  for (let i = 1; i <= count; i++) topButtonArray[i] = i;
  if (animation === true && !animationElement) animationElement = [1];
  let topButtonDiv = topButtonArray.map((el, index) => {
    let randomDelay = Math.floor(Math.random() * 6);
    if (
      animation === true &&
      animationElement &&
      animationElement.includes(index)
    )
      return (
        <div key={`top_button_${index}`} className={`top_button__${index}`}>
          <div
            style={{ animationDelay: `${randomDelay}s` }}
            className={`top_button button_${color} side__front btn__front`}
          />
          <div
            style={{ animationDelay: `${randomDelay}s` }}
            className={`top_button button_${color} side__back btn__back`}
          />
          <div
            style={{ animationDelay: `${randomDelay}s` }}
            className={`top_button button_${color} side__top btn__top`}
          />
          <div
            style={{ animationDelay: `${randomDelay}s` }}
            className={`top_button button_${color} side__bottom btn__bottom`}
          />
          <div
            style={{ animationDelay: `${randomDelay}s` }}
            className={`top_button button_${color} side__left btn__left`}
          />
          <div
            style={{ animationDelay: `${randomDelay}s` }}
            className={`top_button button_${color} side__right btn__right`}
          />
        </div>
      );
    else
      return (
        <div key={`top_button_${index}`} className={`top_button__${index}`}>
          <div className={`top_button button_${color} side__front`} />
          <div className={`top_button button_${color} side__back`} />
          <div className={`top_button button_${color} side__top`} />
          <div className={`top_button button_${color} side__bottom`} />
          <div className={`top_button button_${color} side__left`} />
          <div className={`top_button button_${color} side__right`} />
        </div>
      );
  });
  return (
    <div className={`ml-${left}`} style={{ position: "absolute" }}>
      {topButtonDiv}
    </div>
  );
};

export default TopButtons;
