import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import styles from '../styles/SingleArticle.module.css'
import { getSingleArticle } from '../utils/api'
export const SingleArticle = () => {
    const params = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [currentArticle, setArticle] = useState({});

    useEffect(() => {
        getSingleArticle(params.article_id).then((article) =>{
            setArticle(article)
            setIsLoading(false)
          })
    }, [])
    if(isLoading)
    {
        return <p>Loading...</p>
    }
    return(
        <div className={styles.SingleArticle}>
            <h2>{currentArticle.title}</h2>
            <h3>By {currentArticle.author}</h3>
            <p className={styles.SingleArticleBody}>{currentArticle.body}</p> 
            <Link to={`/articles/${currentArticle.topic}`}><button className="topicTag">{currentArticle.topic}</button></Link> 
            <div className={styles.votes}>Votes: {currentArticle.votes} <button>upvote</button></div>
            <p className={styles.comments}>Comments: {currentArticle.comment_count}</p>
       </div>

    )
}