import { useState } from "react"
import { postComment } from "../utils/api"

export const NewCommentForm = ({articleId, setComments}) => {
    const [newComment, setNewComment] = useState({username: 'jessjelly', body: ''})
    const handleSubmit =(event) => {
        event.preventDefault()
        setComments((prevComments) => {
            const commentToRender = {
                author: newComment.username,
                body: newComment.body,
                votes: 0,
            }
            let currComments = [...prevComments]
            currComments.push(commentToRender)
            return currComments
        })
        postComment(articleId, newComment)
        setNewComment({username: 'jessjelly', body: ''})
    }
    
    return (
        <>
        <h3>New Comment</h3>
        <form onSubmit={handleSubmit}>
            <textarea value={newComment.body} onChange={(event) => {
                setNewComment((prevNewComment) => {
                    let currNewComment = {...prevNewComment} 
                    currNewComment.body = event.target.value
                    return currNewComment
                })
            }} cols="30" rows="10"></textarea>
            <button>Submit</button>
        </form>
        </>

    )
}