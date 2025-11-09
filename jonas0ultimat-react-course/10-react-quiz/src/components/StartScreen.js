function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h1>welcome to the react quiz</h1>
      <h3>{numQuestions} Question to test your react mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        let's start
      </button>
    </div>
  );
}

export default StartScreen;
