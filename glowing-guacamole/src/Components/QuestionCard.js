import React from 'react'
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button'

class QuestionCard extends React.Component {

    render(){
        return (
           <div>
                <div className="questionCards">
                <div className="cardTitleContainer">
                    <br>
                    <h3 className="therapyCategory">${topic.name}</h3>                        
                    <h3 className="card-style">-</h3>
                </div>
                    <p className="therapy-content">${topic.card.question}</p>
                    <button className="skip-button" value="skip">next question > </button>
                </div>
           </div> 
        )
    }
}

export default QuestionCard

