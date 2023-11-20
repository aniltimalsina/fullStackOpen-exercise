import { useState } from "react";
import Statistics from "./statistics";

const Buttons = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  let countGood = good;
  let countNeutral = neutral;
  let countBad = bad;

  const handleGood = () => {
    setGood(good + 1);
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };

  const handleBad = () => {
    setBad(bad + 1);
  };
  return (
    <>
      <button onClick={handleGood}>Good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handleBad}>Bad</button>
      <Statistics
        countGood={countGood}
        countNeutral={countNeutral}
        countBad={countBad}
      />
    </>
  );
};

export default Buttons;
