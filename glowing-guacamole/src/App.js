import React, { useState } from "react";
import Answers from "./Components/AnswersInput";
import Thoughts from "./Components/Thoughts";
import herbal from "./herbal.png";
import "./App.css";

class App extends React.Component {

  render() {
  return (
    <div className="App">
        <Router>
        <NavBar></NavBar>
          <Route exact path="/" component={TopicsContainer} />
          <Route exact path="/topics" component={TopicsContainer} />
          <Route exact path="/about" component={AboutContainer} />
          <Route path={`/topics/:topicId/responses`} component={ResponsesContainer}/>
          <Route path={`/responses`} component={AllResponsesContainer}/>
          <Route path={`/topics/:topicId/`} component={QuestionAndResponse}/>
        </Router>
    </div>
  )

}
}

// function App() {
//   const [thought, setThought] = useState([]);

//   const addNewThought = client => {
//     const newThought = {
//       recordThought: client.recordThought
//     };
//     setThought([...thought, newThought]);
//   };

  //   <div className="container">
  //     <div className="header">
  //       <div className="logo-container">
  //         <img className="logo-img" src={herbal} alt="logo" />
  //         <p className="logo-title">
  //           therapy<span style={{ fontWeight: "bold" }}>cards</span>
  //         </p>
  //       </div>
  //       <nav>
  //         <a href="">
  //           log<span style={{ fontWeight: "bold" }}>in</span>
  //         </a>
  //         <a href="">
  //           sign<span style={{ fontWeight: "bold" }}>up</span>
  //         </a>
  //       </nav>
  //     </div>
  //     <div className="main-section">
  //       <div className="card-container">
  //         <div className="therapyCard">
  //           <div className="card-title-container">
  //             <h3 className="therapy-category">Relationships</h3>
  //             <h3 className="card-style">-</h3>
  //           </div>
  //           <p className="therapy-content">
  //             How might you evolve in the way you express disappointment with a
  //             partner?
  //           </p>
  //         </div>
  //       </div>
  //       <div className="answer-container">
  //         <div className="answerCard">
  //           <div className="answer-title-container">
  //             <h3 className="answer-title">Write your answer below</h3>
  //             <h3 className="answer-style">-</h3>
  //           </div>
  //           <Answers addNewThought={addNewThought} />
  //           <Thoughts thought={thought} />
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

export default App;
