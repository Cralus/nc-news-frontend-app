import axios from 'axios'

const ncNewsApi = axios.create({
    baseURL: 'https://nc-news1000.herokuapp.com/api',
})

export const getArticles = () => {
    return ncNewsApi.get('/articles').then(({ data: {articles} }) => {
        return articles
    })
}