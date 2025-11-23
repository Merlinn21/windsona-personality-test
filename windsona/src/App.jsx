
import React, { useState } from "react";
import Navigation from "./components/Navigation.jsx";
import LandingPage from "./components/LandingPage.jsx";
import ExplanationPage from "./components/ExplanationPage.jsx";
import QuestionPage, { QUESTIONS } from "./components/QuestionPage.jsx";
import LoadingPage from "./components/LoadingPage.jsx";
import ResultPage from "./components/ResultPage.jsx";
import ResultDetailPage from "./components/ResultDetailPage.jsx";

const PAGES = {
  LANDING: "landing",
  EXPLANATION: "explanation",
  QUESTION: "question",
  LOADING: "loading",
  RESULT: "result",
  RESULT_DETAIL: "result_detail",
};

function App() {
  const [page, setPage] = useState(PAGES.LANDING);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState("");

  function handleStartTest() {
    setAnswers([]);
    setQuestionIndex(0);
    setPage(PAGES.QUESTION);
  }

  function handleNextQuestion() {
    if (questionIndex < QUESTIONS.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setPage(PAGES.LOADING);
      setTimeout(() => {
        // Minimal result calculation: count "Agree" answers
        const score = answers.filter((a) => a === "Agree").length;
        let res = "You are mostly Neutral.";
        if (score === QUESTIONS.length) res = "You are very Agreeable!";
        else if (score === 0) res = "You are very Disagreeable!";
        else if (score > QUESTIONS.length / 2) res = "You lean Agreeable.";
        else if (score < QUESTIONS.length / 2) res = "You lean Disagreeable.";
        setResult(res);
        setPage(PAGES.RESULT);
      }, 1200);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <Navigation currentPage={page} setPage={setPage} />
      {page === PAGES.LANDING && (
        <LandingPage
          onStart={handleStartTest}
          onExplain={() => setPage(PAGES.EXPLANATION)}
        />
      )}
      {page === PAGES.EXPLANATION && <ExplanationPage />}
      {page === PAGES.QUESTION && (
        <QuestionPage
          questionIndex={questionIndex}
          answers={answers}
          setAnswers={setAnswers}
          onNext={handleNextQuestion}
        />
      )}
      {page === PAGES.LOADING && <LoadingPage />}
      {page === PAGES.RESULT && answers.length === QUESTIONS.length && (
        <div className="flex flex-col items-center justify-center h-screen">
          <ResultPage result={result} />
          <button
            className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
            onClick={() => setPage(PAGES.RESULT_DETAIL)}
            aria-label="View Details"
          >
            View Details
          </button>
        </div>
      )}
            {page === PAGES.RESULT_DETAIL && (
              <ResultDetailPage result={result} />
            )}
      {page === PAGES.RESULT && answers.length !== QUESTIONS.length && (
        <div className="flex flex-col items-center justify-center h-screen">
          <h2 className="text-xl font-semibold mb-2 text-red-600">Error</h2>
          <p className="text-base">You must complete all questions before viewing the result.</p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded" onClick={handleStartTest}>Restart Test</button>
        </div>
      )}
    </div>
  );
}

export default App;
