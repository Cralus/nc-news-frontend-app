import { useEffect, useState } from "react";
import { ArticleCard } from "./ArticleCard.jsx";
import { getArticles } from "../utils/api.js";
import styles from '../styles/ArticleList.module.css'
import { useParams } from "react-router";
export const ArticleList = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [articles, setArticles] = useState([]);

  const params = useParams()
  console.log(params)
  useEffect(() => {
    getArticles(params.topic).then((articles) =>{
      setArticles(articles)
      setIsLoading(false)
    })
  }, [params.topic])
  if(isLoading)
  {
    return <p>Loading...</p>
  }
  return <ul className={styles.ArticleList}>
    {articles.map(article => {return <ArticleCard key={article.article_id} article={article}/>})}
  </ul>;
};
