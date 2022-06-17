import axios from 'axios'

const ncNewsApi = axios.create({
    baseURL: 'https://nc-news1000.herokuapp.com/api',
})

export const getArticles = (topic, valToSort, orderToSort) => {

    return ncNewsApi.get('/articles', {params: {topic: topic, sort_by: valToSort, order:orderToSort}}).then(({ data: {articles} }) => {
        console.log(articles)
        return articles
    })
}
export const getTopics = () => {
    return ncNewsApi.get('/topics').then(({data: {topics}}) => {
        return topics
    })
}
export const getSingleArticle = (articleId) => {
    return ncNewsApi.get(`/articles/${articleId}`).then(({ data: {article} }) => {
        return article
    })
}
export const patchVotes = (articleId, amountToInc) => {
    return ncNewsApi.patch(`/articles/${articleId}`, {inc_votes: amountToInc}).then(({ data: {article} }) => {
        return article;
    })
}
export const getComments = (articleId) => {
    return ncNewsApi.get(`/articles/${articleId}/comments`).then(({ data: {comments} }) => {
        
        return comments
    })
}
export const postComment = (articleId, {username, body}) => {
    return ncNewsApi.post(`/articles/${articleId}/comments`, {username, body}).then(({ data: {comment} }) => {
       
        return comment
    })
}
export const deleteComment = (commentId) => {
    return ncNewsApi.delete(`/comments/${commentId}`).then((res) => {
       return res.status
    })
}