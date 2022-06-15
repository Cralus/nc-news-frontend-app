import {FaArrowUp, FaArrowDown} from 'react-icons/fa'
import { useEffect, useState } from "react";
import { patchVotes } from "../utils/api";
import styles from "../styles/VoteTracker.module.css";
export const VoteTracker = ({ votes, articleId }) => {
  const [currentVotes, setCurrentVotes] = useState(votes);

  const handleUpvoteClick = () => {
    setCurrentVotes((oldVotes) => {
      return oldVotes + 1;
    });
    patchVotes(articleId, 1).then((article) => {
    }).catch((err) => {
        setCurrentVotes((oldVotes) => {
            alert('Sorry! unsuccessful upvote')
            return oldVotes - 1;
          });
    });
  };
  const handleDownvoteClick = () => {
    setCurrentVotes((oldVotes) => {
      return oldVotes + -1;
    });
    patchVotes(articleId, -1).then((article) => {
    }).catch((err) => {
        setCurrentVotes((oldVotes) => {
            alert('Sorry! unsuccessful downvote')
            return oldVotes + 1;
          });
    });
  };
  return (
    <div className={styles.VoteTracker}>
      Votes: {currentVotes} <button onClick={handleUpvoteClick}><FaArrowUp/></button>
      <button onClick={handleDownvoteClick}><FaArrowDown/></button>
    </div>
  );
};
