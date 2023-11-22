import {
  questions, addToUserAnswers,
  userAnswers, saveUserAnswers, finishButtonToggle, userScoresHTML, userResults
} from "../data/questions.js";

let leftQuestions = JSON.parse(localStorage.getItem('left-questions')) || questions.slice();
let currentQuestions = JSON.parse(localStorage.getItem('current-questions')) || leftQuestions.splice(0, 5);
let answeredQuestions = JSON.parse(localStorage.getItem('answered-questions')) || 5;
const questionsPerPage = 5;
const totalPages = Math.ceil((questions.length / questionsPerPage));

renderHTML();

if (userResults.length !== 0) {
  userScoresHTML();
}

export function renderHTML() {
  const currentPage = calculateCurrentPage();

  let html = '';

  currentQuestions.forEach((eachQuestion) => {
    const { number, question, choices } = eachQuestion;

    let matchingAnswer;
    let userChoice;

    userAnswers.forEach((answer) => {
      if (answer.number === number) {
        matchingAnswer = answer;
      }
    });
    if (matchingAnswer) {
      userChoice = matchingAnswer.choice;
    } else {
      userChoice = '5';
    }

    html += `
      <div class="question-container">
        <div class="question">
          <div class="number">${number}</div>
         <div class="text">
          ${question}
         </div>
        </div>
        ${choiceHTML(choices, number, userChoice)}
      </div>
      `;
  });

  document.querySelector('.title')
    .innerHTML = 'ENGLISH LEVEL TEST';

  document.querySelector('.app-display')
    .innerHTML = `
    <div class="error-message">
      <img class="error-icon" src="images/error-icon.png">
      <div>You must answer all questions before proceeding.</div>
    </div>
    <div class="current-page">
      Page ${currentPage} of ${totalPages}
    </div>
    ${html}
    <div class="buttons">
      <a href="#test-title"><button class="next-button">Next</button></a>
      <button class="finish-button">Finish</button>
    </div>
    `;
  CheckIfcompleteTheTest();
  document.querySelectorAll('.js-choice-container')
    .forEach((element) => {
      element.addEventListener('click', () => {
        const { userAnswer, number, userChoice } = element.dataset;
        addToUserAnswers(userAnswer, number, userChoice);
        renderHTML();
        saveToLocalStorage();
        saveUserAnswers();
        CheckIfcompleteTheTest();
      });
    });

  document.querySelector('.next-button')
    .addEventListener('click', () => {
      if (userAnswers.length < answeredQuestions) {
        stayInThisPage();
      } else {
        goToNextPage();
      }
    });

  document.querySelector('.finish-button')
    .addEventListener('click', () => {
      removeFromStorage();
      finishButtonToggle();
    });
}

function choiceHTML(choices, number, userChoice) {
  let html = '';

  choices.forEach((choice, index) => {

    let isChecked = String(index + 1) === userChoice;

    html += `
    <div class="choice-container ${isChecked ? 'choice-container-chosen' : ' '} js-choice-container"
    data-user-answer="${choice}" data-number="${number}"
    data-user-choice="${index + 1}">
      <input ${isChecked ? 'checked' : ' '} class="radio-button" type="radio" name="choice-${number}">
      <div class="choice">${choice}</div>
    </div>
    `;
  });
  return html;

}

function saveToLocalStorage() {
  localStorage.setItem('current-questions', JSON.stringify(currentQuestions));
  localStorage.setItem('left-questions', JSON.stringify(leftQuestions));
  localStorage.setItem('answered-questions', String(answeredQuestions));
}

function removeFromStorage() {
  localStorage.removeItem('current-questions');
  localStorage.removeItem('left-questions');
  localStorage.removeItem('answered-questions');
}

function calculateCurrentPage() {
  const currentPage = Math.ceil((questions.length - leftQuestions.length) / questionsPerPage);
  return currentPage;
}

function calculateCurrentQuestions() {
  currentQuestions = leftQuestions.splice(0, 5);
  answeredQuestions += currentQuestions.length;
}

function goToNextPage() {
  calculateCurrentQuestions();
  renderHTML();
}

let timeOutId;
function stayInThisPage() {
  const element = document.querySelector('.error-message');

  element.style.display = 'flex';
  clearTimeout(timeOutId);
  timeOutId = setTimeout(() => {
    element.style.display = 'none';
  }, 5000)
}

function CheckIfcompleteTheTest() {
  if (userAnswers.length !== questions.length) {
    document.querySelector('.finish-button')
      .style.display = 'none';
  } else {
    document.querySelector('.next-button')
      .style.display = 'none';
    document.querySelector('.finish-button')
      .style.display = 'block';
  }
}

