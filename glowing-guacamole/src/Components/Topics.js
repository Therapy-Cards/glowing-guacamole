import React from 'react'
import Topic from './Topic'

const Topics = (props) => {
    console.log(props.topics)
    let topics = props.topics && props.topics.map(topic => <Topic key={topic.id} topic={topic} />)

        return(
            <div className="topic-cards">
                {topics}
             </div>
        )

}

export default Topics
