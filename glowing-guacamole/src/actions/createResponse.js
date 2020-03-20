export const createResponse = (response, topicId) => {
    return (dispatch) => {
      fetch(`http://localhost:3000/api/v1/topics/${topicId}/responses`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(response)
      })
      .then(response => response.json())
      .then(topic => {
          if (topic.error) {
            alert(topic.error)
          } else {
            dispatch({type: 'CREATE_RESPONSE', payload: response})
          }
        }
      )
    }
  }