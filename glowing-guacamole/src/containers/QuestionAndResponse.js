import React from 'react'
import {fetchTopics} from '../actions/fetchTopics'
import QuestionCard from '../components/QuestionCard'
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux'

class QuestionsAndResponses extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            t: {}
        }
    }

    componentDidMount(){
        this.props.fetchTopics()
        const topicId = this.props.match.params.topicId
        this.setState({
            t : this.props.topics.find(t => {return t.id === parseInt(topicId)})
        })
    }

    render(){
        const topicId = this.props.match.params.topicId
        return (
            <div>
                <QuestionCard topicId ={this.props.match.params.topicId} 
                topic = {this.props.topics.find(t => {return t.id === parseInt(topicId)})}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        topics: state.topics
    }
}

export default connect(mapStateToProps, {fetchTopics})(QuestionsAndResponses)

