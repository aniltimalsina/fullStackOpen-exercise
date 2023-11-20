import { useState } from "react";
import Statistics from "./statistics";

const Buttons = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  let countGood = good;
  let countNeutral = neutral;
  let countBad = bad;
  let countAll = countGood + countNeutral + countBad;
  let countAverage = Math.abs((countGood - countBad) / countAll);
  let positivePercent = (countGood / countAll) * 100;

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
      <h1>Statistics</h1>
      {countAll == 0 ? (
        <p>No Feedback given</p>
      ) : (
        <Statistics
          countGood={countGood}
          countNeutral={countNeutral}
          countBad={countBad}
          countAll={countAll}
          countAverage={countAverage}
          positivePercent={`${positivePercent} %`}
        />
      )}
    </>
  );
};

export default Buttons;
