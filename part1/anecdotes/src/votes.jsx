import { useState } from "react";

const Votes = ({ currentAnecdote, givenAnecdote }) => {
  console.log(givenAnecdote);
  const [voteCount, setVoteCount] = useState(
    new Array(givenAnecdote.length).fill(0)
  );

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
