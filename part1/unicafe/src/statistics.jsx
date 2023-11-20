import StatisticLine from "./statisticline";
const Statistics = (props) => {
  return (
    <>
      <StatisticLine text="good" value={props.countGood} />
      <StatisticLine text="neutral" value={props.countNeutral} />
      <StatisticLine text="bad" value={props.countBad} />
      <StatisticLine text="all" value={props.countAll} />
      <StatisticLine text="average" value={props.countAverage} />
      <StatisticLine text="positive" value={props.positivePercent} />
    </>
  );
};

export default Statistics;
