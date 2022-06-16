import { useEffect, useState } from "react"
import { getComments } from "../utils/api"
import { CommentCard } from "./CommentCard"
import { NewCommentForm } from "./NewCommentForm";
import styles from "../styles/CommentList.module.css"
export const CommentList = ({articleId}) => {
   const [comments, setComments] =useState([])
useEffect(() => {
getComments(articleId).then((comments) => {
    setComments(comments)
})
}, [])
    return (
        <>
        <h2>Comments</h2>
       
        <ul className={styles.CommentList}>
        {comments.map((comment, index) => <CommentCard key={index} comment={comment}/>)}   
         </ul>
        <NewCommentForm articleId={articleId} setComments={setComments}/>
        </>
    )
}