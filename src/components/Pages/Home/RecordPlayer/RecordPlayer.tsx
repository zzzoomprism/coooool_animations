import React from "react";
import BottomStand from "./BottomStand";
import Radio from "./Radio";
import Cassette from "./Cassette";
import Handle from "./Handle";
import MainObject from "./MainObject";
import Shadows from "./Shadows";
import SmallButtons from "./SmallButtons";
import Speakers from "./Speakers";
import TopButtons from "./TopButtons";

const RecordPlayer = () => {
  return (
    <div>
      <section id={"object"}>
        <MainObject />
        <BottomStand />
        <Radio />
        <Speakers />
        <Cassette />
        <SmallButtons />
        <TopButtons
          count={2}
          color="yellow"
          left={0}
          animation={true}
          animationElement={[1, 2]}
        />
        <TopButtons count={1} color="white" left={4} />
        <TopButtons
          count={3}
          color="yellow"
          left={5}
          animation={true}
          animationElement={[3]}
        />
        <TopButtons count={1} color="blue" left={11} />
        <Handle />
        <Shadows />
      </section>
    </div>
  );
};

export default RecordPlayer;
