
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

  console.log("Current Page:", page);

  return (
    <div style={{ minHeight: '100vh', background: '#FFD200', position: 'relative' }}>
      {page === PAGES.LANDING && (
        <LandingPage
          onStart={handleStartTest}
          onExplain={() => setPage(PAGES.EXPLANATION)}
        />
      )}
      {page === PAGES.EXPLANATION && <ExplanationPage onBack={() => {
        console.log("Going back to landing page");
        setPage(PAGES.LANDING);
      }} onContinue={handleStartTest} />}
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
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
          <ResultPage result={result} />
          <button
            style={{ marginTop: '1rem', padding: '0.5rem 1rem', background: '#444', color: '#fff', borderRadius: '0.25rem', border: 'none' }}
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
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: '#d32f2f' }}>Error</h2>
          <p style={{ fontSize: '1rem' }}>You must complete all questions before viewing the result.</p>
          <button style={{ marginTop: '1rem', padding: '0.5rem 1rem', background: '#1976d2', color: '#fff', borderRadius: '0.25rem', border: 'none' }} onClick={handleStartTest}>Restart Test</button>
        </div>
      )}
    </div>
  );
}

export default App;
