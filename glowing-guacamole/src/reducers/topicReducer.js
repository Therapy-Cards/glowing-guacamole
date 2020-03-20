export default function categoryReducer(state = {categories: []}, action) {
    switch (action.type) {
        case 'FETCH_TOPICS':
            return {topics: action.payload} 

        case 'CREATE_RESPONSE':
            let topics = state.topics.map(topic => {
                if (topic.id === action.payload.id) {
                    return action.payload
                } else {
                    return topic}
                })
            return {...state, topics: topics}  

        case 'DELETE_RESPONSE':
            let topicsTwo = state.topics.map(topic => {
                if (topic.id === action.payload.id) {
                    return action.payload
                } else {
                    return topic}
            })
            return {...state, topics: topicsTwo}

        case 'UPDATE_RESPONSE':
            let topicsThree = state.topics.map(topic => {
                if (topic.id === action.payload.id) {
                  return action.payload
                } else {
                  return topic
                }
              })
              return {...state, topics: topicsThree}
            default:
              return state
    }
}
          
    
