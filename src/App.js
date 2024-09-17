import React, { useState } from "react";
import "./App.css";

const VotingForm = () => {
  const members = [
    "Member 1",
    "Member 2",
    "Member 3",
    "Member 4",
    "Member 5",
    "Member 6",
    "Member 7",
    "Member 8",
    "Member 9",
    "Member 10",
  ];

  const [votes, setVotes] = useState(Array(members.length).fill(0));
  const [totalVotes, setTotalVotes] = useState(0);
  const voteLimit = 100;

  const handleVote = (index) => {
    if (totalVotes < voteLimit) {
      const newVotes = [...votes];
      newVotes[index] += 1;
      setVotes(newVotes);
      setTotalVotes(totalVotes + 1);
    } else {
      alert("Voting limit of 100 has been reached!");
    }
  };

  const getWinner = () => {
    const maxVotes = Math.max(...votes);
    const winnerIndex = votes.indexOf(maxVotes);
    return { winner: members[winnerIndex], votes: maxVotes };
  };

  return (
    <div className="voting-form-container">
      <h1 className="title">Vote for Your Favorite Member</h1>
      <p className="vote-count">
        Total Votes: {totalVotes}/{voteLimit}
      </p>
      <div className="members-list">
        {members.map((member, index) => (
          <div key={index} className="member-item">
            <span className="member-name">{member}</span>
            <button
              onClick={() => handleVote(index)}
              className="vote-button"
              disabled={totalVotes >= voteLimit}
            >
              Vote
            </button>
          </div>
        ))}
      </div>
      {totalVotes === voteLimit && (
        <div className="winner-section">
          <h2 className="winner-title">Voting Results</h2>
          <p className="winner-details">
            Winner: {getWinner().winner} with {getWinner().votes} votes!
          </p>
        </div>
      )}
    </div>
  );
};

export default VotingForm;
