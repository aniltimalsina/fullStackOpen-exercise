function HighestVote({ voteCount, anecdotes }) {
  const requiredIndex = voteCount.indexOf(Math.max(...voteCount));
  return (
    <>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[requiredIndex]}</p>
      <p>has {voteCount[requiredIndex]} votes</p>
    </>
  );
}

export default HighestVote;
