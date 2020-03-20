import React from 'react'
import Topic from './Topic'

const Topics = (props) => {
    const topics = props.topics.map(topic => <Topic key={topic.id} topic={topic} />)

        return(
            <div className="card-container">
                {topics}
             </div>
        )

}

export default Topics
