import { useEffect, useState } from "react";
import { ArticleCard } from "./ArticleCard.jsx";
import { getArticles } from "../utils/api.js";
import styles from '../styles/ArticleList.module.css'
export const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getArticles().then((articles) =>{
      setArticles(articles)
    })
  }, [])
  return <ul className={styles.ArticleList}>
    {articles.map(article => {return <ArticleCard key={article.article_id} article={article}/>})}
  </ul>;
};
