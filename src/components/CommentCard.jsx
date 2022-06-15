import styles from "../styles/CommentCard.module.css"
export const CommentCard = ({comment}) => {

    return(
        <li className={styles.CommentCard}>
            <p>By {comment.author}</p>
            <br />
            <p>{comment.body}</p>
            <br/>
            <p>Votes: {comment.votes}</p>
        </li>
    )
}