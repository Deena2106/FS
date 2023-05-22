import React, { useState } from 'react';

function Quiz({ questions }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  
  const currentQuestion = questions[currentQuestionIndex];
  
  const handleAnswer = (selectedAnswerIndex) => {
    setUserAnswers([...userAnswers, selectedAnswerIndex]);
    if (currentQuestionIndex === questions.length - 1) {
      // User has answered all questions
      // Calculate and display score
      const score = calculateScore();
      alert(`Your score: ${score}%`);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  
  const calculateScore = () => {
    let correctCount = 0;
    for (let i = 0; i < questions.length; i++) {
      if (userAnswers[i] === questions[i].correct) {
        correctCount++;
      }
    }
    return (correctCount / questions.length) * 100;
  };
  
  return (
    <div className="Quiz">
      <h1>Quiz</h1>
      {currentQuestion && (
        <div className="Question">
          <h2>{currentQuestion.question}</h2>
          <ul>
            {currentQuestion.answers.map((answer, index) => (
              <li key={index}>
                <button onClick={() => handleAnswer(index)}>
                  {answer}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Quiz;
