import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getTopics } from "../utils/api"
export const Nav = () => {
    const [topics, setTopics] = useState([])
    useEffect(() => {
        getTopics().then((topics) => {
            setTopics(topics)
        })
    }, [])
    console.log(topics)
    return(
        <nav>
            <h2>Topics</h2>
            <ul>
                {topics.map((topic) => {
                    return <li><Link to={`articles/${topic.slug}`}>{topic.slug}</Link></li>
                })}
            </ul>
        </nav>
    )
}