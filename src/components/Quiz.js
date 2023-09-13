import React, { useState, useEffect } from 'react';

/* const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question');
const choicesContainer = document.getElementById('choices');
const submitButton = document.getElementById('submit');
const submitScoreButton = document.getElementById('submit-score');
const checkHighScoresButton = document.getElementById('check-high-scores');
const resultContainer = document.getElementById('result');
const highScoresContainer = document.getElementById('high-scores');
const highScoresList = document.getElementById('high-scores-list'); */

function Quiz() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    // eslint-disable-next-line
    const [highScores, setHighScores] = useState([]);
    const [displayHighScores, setDisplayHighScores] = useState(false);
    // eslint-disable-next-line
    const [fetchedHighScores, setFetchedHighScores] = useState([]);
    // eslint-disable-next-line
    const [displayFetchedHighScores, setDisplayFetchedHighScores] = useState(false);
    const questions = [
        {
            question: "What is B.B. Kings's full name?",
            choices: ['Riley B. King', 'Benjamin Braxton King', 'Robert B. King', 'Billy B. King'],
            correctAnswer: 0,
        },
        {
            question: 'What is the name of the band that B.B. King started in 1949?',
            choices: ['B.B. King Review', 'Mississipi Blues', 'King and the 4', 'Blues Gospel'],
            correctAnswer: 0,
        },
        {
            question: 'How many times was B.B. King married?',
            choices: ['None', 'Two', 'Four', 'Five'],
            correctAnswer: 1,
        },
        {
            question: "What year was B.B. King inducted  into 'The Blues Hall of Fame'?",
            choices: ['1979', '1986', '1980', '1991'],
            correctAnswer: 2,
        },
    ];
    useEffect(
        () => {
            if (!displayHighScores) {
                displayQuestion();
            }
        }, // eslint-disable-next-line
        [currentQuestionIndex, displayHighScores],
    );

    function displayQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        return (
            <div>
                <h3>{currentQuestion.question}</h3>
                <div id="choices">
                    {currentQuestion.choices.map((choice, index) => (
                        <div key={index} className="choice" onClick={() => checkAnswer(index)}>
                            {choice}
                        </div>
                    ))}
                </div>
                <button id="submit" onClick={nextQuestionOrShowResult}>
                    Next
                </button>
            </div>
        );
    }

    function checkAnswer(selectedIndex) {
        const currentQuestion = questions[currentQuestionIndex];

        if (selectedIndex === currentQuestion.correctAnswer) {
            setScore(score + 1);
        }
    }
    function showResult() {
        return (
            <div>
                <h2>Result</h2>
                <p>
                    You scored {score} out of {questions.length}!
                </p>
                <button id="submit-score" onClick={submitScore}>
                    Submit Score
                </button>
                <button id="check-high-scores" onClick={fetchHighScores}>
                    Check High Scores
                </button>
                <button id="restart" onClick={restartQuiz}>
                    Restart
                </button>
            </div>
        );
    }

    async function submitScore() {
        const name = prompt('Enter your name:');

        if (name) {
            try {
                const response = await fetch('http://localhost:5500/submit-score', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name, score }),
                });

                if (!response.ok) {
                    console.error('Failed to submit score. Response status:', response.status);
                    return;
                }

                restartQuiz();
            } catch (error) {
                console.error('Error submitting score:', error);
            }
        }
    }

    function restartQuiz() {
        setCurrentQuestionIndex(0);
        setScore(0);
        setDisplayHighScores(false);
    }

    async function fetchHighScores() {
        try {
            const highScoresResponse = await fetch('http://localhost:5500/get-scores', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!highScoresResponse.ok) {
                console.error('Failed to fetch high scores');
                return;
            }

            const fetchedHighScores = await highScoresResponse.json();
            setFetchedHighScores(fetchedHighScores);
            setDisplayFetchedHighScores(true);
        } catch (error) {
            console.error('Error fetching high scores:', error);
        }
    }

    function nextQuestionOrShowResult() {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            fetchHighScores();
        }
    }

    return (
        <div>
            {displayHighScores ? (
                <div>
                    <h2>High Scores</h2>
                    <ul>
                        {highScores.map((entry, index) => (
                            <li key={index}>{`${index + 1}. ${entry.name} - ${entry.score}`}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div>
                    {/* Display question or result */}
                    {currentQuestionIndex < questions.length ? displayQuestion() : showResult()}
                </div>
            )}
            <button id="check-high-scores" onClick={fetchHighScores}>
                Check High Scores
            </button>
        </div>
    );
}

export default Quiz;
