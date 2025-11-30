
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

// Trait mapping for each question/option
const TRAIT_MAP = [
  // Q1
  [
    { I: 1, N: 1 },      // A
    { E: 1, P: 1 },      // B
    { E: 1, F: 1 },      // C
    { J: 1, T: 1 },      // D
  ],
  // Q2
  [
    { J: 1, S: 1 },
    { P: 1, E: 1 },
    { F: 1, E: 1 },
    { J: 1, T: 1 },
  ],
  // Q3
  [
    { I: 1, N: 1 },
    { E: 1, N: 1 },
    { F: 1, S: 1 },
    { J: 1, S: 1 },
  ],
  // Q4
  [
    { I: 1, S: 1 },
    { E: 1, P: 1 },
    { F: 1, N: 1 },
    { T: 1, J: 1 },
  ],
  // Q5
  [
    { T: 1, J: 1 },
    { E: 1, P: 1 },
    { F: 1, P: 1 },
    { T: 1, J: 1 },
  ],
  // Q6
  [
    { J: 1, S: 1 },
    { P: 1, E: 1 },
    { F: 1, E: 1 },
    { J: 1, T: 1 },
  ],
  // Q7
  [
    { I: 1, S: 1 },
    { P: 1, N: 1 },
    { F: 1, E: 1 },
    { J: 1, S: 1 },
  ],
  // Q8
  [
    { I: 1, N: 1 },
    { E: 1, P: 1 },
    { F: 1, E: 1 },
    { J: 1, S: 1 },
  ],
  // Q9
  [
    { F: 1, I: 1 },
    { E: 1, P: 1 },
    { F: 1, S: 1 },
    { T: 1, J: 1 },
  ],
  // Q10
  [
    { N: 1 },
    { N: 1, P: 1 },
    { F: 1 },
    { T: 1, J: 1 },
  ],
];


function calculateTraits(answers) {
  const traits = { I: 0, E: 0, N: 0, S: 0, F: 0, T: 0, J: 0, P: 0 };
  answers.forEach((ans, i) => {
    // ans is "A", "B", "C", or "D"
    const idx = "0123".indexOf(ans);
    if (idx !== -1 && TRAIT_MAP[i] && TRAIT_MAP[i][idx]) {
      Object.entries(TRAIT_MAP[i][idx]).forEach(([trait, value]) => {
        traits[trait] += value;
      });
    }
  });
  return traits;
}

function getTopTraits(traits, count = 4) {
  return Object.entries(traits)
    .sort((a, b) => b[1] - a[1]) // Sort by value descending
    .slice(0, count) // Take top N
    .map(([trait, value]) => trait); // Return trait names only
}

function getPersonalityType(traits) {
  const pairs = [
    ['I', 'E'],
    ['N', 'S'],
    ['T', 'F'],
    ['J', 'P'],
  ];
  return pairs.map(([a, b]) => (traits[a] >= traits[b] ? a : b)).join('');
}


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

  function handleNextQuestion(newAnswers) {
    if (questionIndex < QUESTIONS.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setPage(PAGES.LOADING);
      console.log("newAnswers:", newAnswers);
      setTimeout(() => {
        let result = calculateTraits(newAnswers);
        const type = getPersonalityType(result);

        setResult(`Your top personality traits are: ${type}`);
        setPage(PAGES.RESULT);

        // Minimal result calculation: count "Agree" answers
        // const score = answers.filter((a) => a === "Agree").length;
        // let res = "You are mostly Neutral.";
        // if (score === QUESTIONS.length) res = "You are very Agreeable!";
        // else if (score === 0) res = "You are very Disagreeable!";
        // else if (score > QUESTIONS.length / 2) res = "You lean Agreeable.";
        // else if (score < QUESTIONS.length / 2) res = "You lean Disagreeable.";
        // setResult(res);
        // setPage(PAGES.RESULT);
      }, 2000);
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
