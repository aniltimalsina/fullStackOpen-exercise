import { useState } from "react";

const Votes = ({ currentAnecdote, voteCount, setVoteCount }) => {
  const handleVoteCount = () => {
    const copy = [...voteCount];
    copy[currentAnecdote] += 1;
    setVoteCount(copy);
  };

  return (
    <>
      <p>has {voteCount[currentAnecdote]} votes</p>
      <button onClick={handleVoteCount}>Vote</button>
    </>
  );
};

export default Votes;
