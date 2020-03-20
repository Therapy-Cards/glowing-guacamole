import React from 'react'
import {connect} from 'react-redux'
import {fetchTopics} from '../actions/fetchTopics'
import Topics from '../components/Topics'
import Button from '@material-ui/core/Button';
import'../App.css'

class TopicsContainer extends React.Component {
    
    componentDidMount(){
        this.props.fetchTopics()
    }

    render(){
        console.log(this)
        return (
            <div className="App">
                <br></br>
                <Button variant="contained" color="primary" >SELECT A TOPIC!</Button>
                <br></br>
                <br></br>
                <Topics topics={this.props.topics} />
                <br></br>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        topics: state.topics
    }
}



export default connect(mapStateToProps, {fetchTopics})(TopicsContainer)