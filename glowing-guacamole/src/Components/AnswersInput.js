import React, { useState } from "react";

const AnswersInput = props => {

const [thought, setThought] = useState({
        recordThought: "",
    });

const changeHandler = e => {
    setThought({
        ...thought,
        [e.target.name]: e.target.value
    });
    console.log(e.target.value);
}

const submitForm = e => {
    e.preventDefault();

    props.addNewThought(thought);
    setThought({recordThought:""});

    const initialState = {
        recordThought: "",
      }
      setThought(initialState);
};



return (
    <div className='thought-container'>
        <br /><br />
        <form onSubmit={submitForm}>
            <textarea className="text-box"
                id='recordThought'
                type='text'
                placeholder='E.g. I will be more understanding of my partners feelings, before responding.'
                name='recordThought'
                wrap="soft"
                onChange={changeHandler}
                value={thought.recordThought}
            />
                <button className="submit-button" type='submit'>Submit</button>
        </form>    
    </div>
    )
}

export default AnswersInput;