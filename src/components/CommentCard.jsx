import { userContext } from "../context/user";
import { useContext } from "react"
import styles from "../styles/CommentCard.module.css"
import { deleteComment } from "../utils/api";
export const CommentCard = ({comment, commentId, setComments}) => {
    const { user } = useContext(userContext);
    const handleDelete = () => {
        setComments((prevComments) => {
            const newComments = prevComments.filter(comment => comment.comment_id !== commentId)
            return newComments
        })
        deleteComment(commentId).catch((err) => {
            alert('oops your comment didnt delete!')
        })
    }
    return(
        <li className={styles.CommentCard}>
            <p>By {comment.author}</p>
            <br />
            <p>{comment.body}</p>
            <br/>
            <p>Votes: {comment.votes}</p>
            {comment.author === user.username ?<button onClick={handleDelete}>Delete Comment</button> :null}
        </li>
    )
}