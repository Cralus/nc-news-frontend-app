import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getTopics } from "../utils/api"
import { getArticles } from "../utils/api"
export const Nav = ({ setValToSort, setOrderToSort, orderToSort}) => {
    const [topics, setTopics] = useState([])
    const [descendingOrAscending, setDescendingOrAscending] = useState(true)
    const handleChange = (event) => {
        setValToSort(event.target.value)

    }
    const handleClick = () => {
        if(orderToSort === 'ASC')
        {
            setOrderToSort('DESC')
            setDescendingOrAscending(false)
        } else {
            setOrderToSort('ASC')
            setDescendingOrAscending(true)
        }
    }
    useEffect(() => {
        getTopics().then((topics) => {
            setTopics(topics)
        })
    }, [])
    return(
        <nav>
            <h2>Topics</h2>
            <ul>
                {topics.map((topic) => {
                    return <li key={topic.slug}><Link to={`/articles/${topic.slug}`}>{topic.slug}</Link></li>
                })}
            </ul>
            <form>
                <select onChange={handleChange} id="">
                    <option value="created_at">Date</option>
                    <option value="votes">Votes</option>
                    <option value="comment_count">Comment Count</option>
                </select>
            </form>
            <button onClick={handleClick} disabled={descendingOrAscending}>Ascending order</button>
            <button onClick={handleClick} disabled={!descendingOrAscending}>Descending Order</button>
        </nav>
    )
}