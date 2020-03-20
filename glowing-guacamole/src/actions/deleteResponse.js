export const deleteResponse = (responseId, topicId) => {
    return (dispatch) => {
      return fetch(`http://localhost:3000/api/v1/topics/${topicId}/responses/${responseId}`, {
        method: 'DELETE'
      })
      .then(response => response.json())
      .then(topic => dispatch({type: 'DELETE_RESPONSE', payload: topic}))
    }
  }