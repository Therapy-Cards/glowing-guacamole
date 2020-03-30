import React from 'react'
import {Link} from 'react-router-dom'

const Topic = (props) => {
    let topic = props.topic
    return(
        <div className="card-container">
            <Link to={`/topics/${topic.id}/`}style={{ textDecoration: 'none' }}>
                <h2>{topic.name}</h2>
            </Link> 
        </div> 
    )
}

export default Topic