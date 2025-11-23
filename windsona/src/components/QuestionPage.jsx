import React, { useState } from "react";

const QUESTIONS = [
  {
    id: 1,
    text: "You enjoy social gatherings.",
    options: ["Agree", "Neutral", "Disagree"],
  },
  {
    id: 2,
    text: "You prefer planning over spontaneity.",
    options: ["Agree", "Neutral", "Disagree"],
  },
  {
    id: 3,
    text: "You like to try new things.",
    options: ["Agree", "Neutral", "Disagree"],
  },
];

export default function QuestionPage({ questionIndex, answers, setAnswers, onNext }) {
  const question = QUESTIONS[questionIndex];
  const [selected, setSelected] = useState(answers[questionIndex] || "");

  function handleSelect(option) {
    setSelected(option);
  }

  function handleNext() {
    if (!selected) return;
    const newAnswers = [...answers];
    newAnswers[questionIndex] = selected;
    setAnswers(newAnswers);
    onNext();
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen" role="main" aria-label={`Question ${questionIndex + 1}`}>
      <h2 className="text-xl font-semibold mb-4" tabIndex={0}>Question {questionIndex + 1}</h2>
      <p className="mb-6 text-base" tabIndex={0}>{question.text}</p>
      <div className="flex flex-col gap-2 mb-8" role="radiogroup" aria-label="Answer options">
        {question.options.map((option) => (
          <button
            key={option}
            className={`px-4 py-2 rounded border ${selected === option ? "bg-blue-600 text-white" : "bg-white text-gray-800"}`}
            onClick={() => handleSelect(option)}
            aria-pressed={selected === option}
            aria-label={option}
            tabIndex={0}
          >
            {option}
          </button>
        ))}
      </div>
      <button
        className="px-4 py-2 bg-green-600 text-white rounded"
        onClick={handleNext}
        disabled={!selected}
        aria-label={questionIndex < QUESTIONS.length - 1 ? "Next Question" : "Finish Test"}
        tabIndex={0}
      >
        {questionIndex < QUESTIONS.length - 1 ? "Next" : "Finish"}
      </button>
      {!selected && (
        <p className="mt-2 text-sm text-red-600">Please select an answer to continue.</p>
      )}
    </div>
  );
}

export { QUESTIONS };
