const Statistics = (props) => {
  return (
    <>
      <h1>Statistics</h1>
      <p>good {props.countGood}</p>
      <p>neutral {props.countNeutral}</p>
      <p>bad {props.countBad}</p>
    </>
  );
};

export default Statistics;
