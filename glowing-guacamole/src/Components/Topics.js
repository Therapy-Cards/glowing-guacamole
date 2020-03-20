import React from 'react'
import Topic from './Topic'

const Topics = (props) => {
    let topics = props.topics && props.topics.map(topic => <Topic key={topic.id} topic={topic} />)

        return(
            <div className="topic-cards">
                {topics}
             </div>
        )

}

export default Topics
