import styles from '../styles/ArticleCard.module.css'
import { Link } from 'react-router-dom'
export const ArticleCard = ({article}) => {
    return(
        <li className={styles.ArticleCard}>
                
            <h3>{article.title}</h3>
            <br />
            <p>{article.body}</p>
            <br />
            <p>Upvotes: {article.votes}</p>
            <br />
            Tag: <Link to={`/articles/${article.topic}`}><button className={styles.topicTag}>{article.topic}</button></Link> 
            <br />
            <p>Comments:{article.comment_count}</p>
        </li>
    )
}