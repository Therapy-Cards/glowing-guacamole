export const updateResponse = (data, topicId) => {
    return (dispatch) => {
      fetch(`http://localhost:3000/api/v1/topics/${topicId}/${data.id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'PATCH',
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(topic => dispatch({type: 'UPDATE_RESPONSE', payload: topic}))
    }
  }