import { useEffect, useState } from "react";
import { ArticleCard } from "./ArticleCard.jsx";
import { getArticles } from "../utils/api.js";
import { Nav } from './Nav';
import styles from '../styles/ArticleList.module.css'
import { useParams } from "react-router";
export const ArticleList = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [articles, setArticles] = useState([]);
  const [valToSort, setValToSort] = useState('created_at')
  const [orderToSort, setOrderToSort] = useState('ASC')

  const params = useParams()

  useEffect(() => {
    getArticles(params.topic, valToSort, orderToSort).then((articles) =>{
      setArticles(articles)
      setIsLoading(false)
    })
  }, [params.topic, valToSort, orderToSort])
  if(isLoading)
  {
    return <p>Loading...</p>
  }
  return (<>  
  <Nav setValToSort={setValToSort} setOrderToSort={setOrderToSort} orderToSort={orderToSort}/> 
     <ul className={styles.ArticleList}>
    {articles.map(article => {return <ArticleCard key={article.article_id} article={article}/>})}
  </ul>
  </>
)
};
