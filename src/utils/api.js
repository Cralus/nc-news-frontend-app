import axios from 'axios'

const ncNewsApi = axios.create({
    baseURL: 'https://nc-news1000.herokuapp.com/api',
})

export const getArticles = (topic) => {

    return ncNewsApi.get('/articles', {params: {topic}}).then(({ data: {articles} }) => {
        return articles
    })
}
export const getTopics = () => {
    return ncNewsApi.get('/topics').then(({data: {topics}}) => {
        return topics
    })
}