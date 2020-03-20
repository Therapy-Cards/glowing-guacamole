import React from "./node_modules/react";

const Thoughts = props => {

    return (
    <div className="thoughts-record">
        {props.thought.map(client => (
            <div className='thought' key={client.id}>
                <p>Your Thoughts: {client.recordThought}</p>
                </div>
        ))}
    </div>
    );
}

export default Thoughts;