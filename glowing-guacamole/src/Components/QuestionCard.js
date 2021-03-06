import React from 'react'
import Button from '@material-ui/core/Button'

class QuestionCard extends React.Component {
    
    constructor() {
        super()
        this.state = {
            card: '',
            response: ''
        }
    }
  
    handleChange = (event) => {
        this.setState({
        card: '',
        response: ''
        })
    }

    render(){
        console.log(this)
        return (
           <div>
                <div className="questionCards">
                    <div className="cardTitleContainer">
                        <h3 className="therapyCategory">{this.props.topic.name}</h3>                        
                        <h3 className="card-style">-</h3>
                    </div>
                    {/* <p className="therapy-content">${this.props.topic.card.question}</p> */}
                    <Button value="skip" onClick={this.handleChange}>next question > </Button>
                </div>
           </div> 
        )
    }
}

export default QuestionCard

