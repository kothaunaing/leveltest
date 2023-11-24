import {
  questions, addToUserAnswers,
  userAnswers, saveUserAnswers,
  finishButtonToggle, userScoresHTML,
  userResults, refreshPage,
  removeUserAnswers
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
      userChoice = '0';
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
      <div>Page ${currentPage} of ${totalPages}</div>
      <button class="stop-button js-stop-button">Stop</button>
    </div>
    ${html}
    <div class="buttons">
      <button class="next-button">Next</button>
      <button class="finish-button">Finish</button>
    </div>
    `;

  checkIfcompleteTheTest();
  
  document.querySelectorAll('.js-choice-container')
    .forEach((element) => {
      element.addEventListener('click', () => {
        const { userAnswer, number, userChoice } = element.dataset;
        addToUserAnswers(userAnswer, number, userChoice);
        renderHTML();
        saveToLocalStorage();
        saveUserAnswers();
        checkIfcompleteTheTest();
      });
    });

  const nextButtonElement = document.querySelector('.next-button')
  nextButtonElement
    .addEventListener('click', () => {
      if (userAnswers.length < answeredQuestions) {
        stayInThisPage();
      } else {
        goToNextPage();
      }
    });

  nextButtonElement
    .addEventListener('click', () => {
      scrollTo(
        {
          top: 0,
          behavior: 'smooth'
        }
      );
    })

  document.querySelector('.finish-button')
    .addEventListener('click', () => {
      removeFromStorage();
      finishButtonToggle();
    });

  stopButtonFunction(currentPage);
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

function checkIfcompleteTheTest() {
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

const confirmElement = document.querySelector('.js-confirm-dialogue');

function showConfirmMessage() {
  confirmElement
    .style.display = 'flex';
}

function hideConfirmMessage() {
  confirmElement
    .style.display = 'none';
}

function stopButtonFunction(currentPage) {
  const stopButtonElement = document.querySelector('.js-stop-button')

  if (currentPage > 1) {
    stopButtonElement.style.display = 'block';
  } else {
    stopButtonElement.style.display = 'none';
  }

  stopButtonElement
    .addEventListener('click', () => {
      showConfirmMessage();
    });

  document.querySelector('.js-no-button')
    .addEventListener('click', () => {
      hideConfirmMessage();
    });

  document.querySelector('.js-yes-button')
    .addEventListener('click', () => {
      removeFromStorage();
      removeUserAnswers();
      refreshPage();
    });
}

const morePagesElement = document.querySelector('.js-more-pages');
const menuIconElement = document.querySelector('.js-menu-icon')

menuIconElement
  .addEventListener('click', () => {
    menuIconElement.classList.toggle('menu-icon-active');
    
    if (menuIconElement.classList.contains('menu-icon-active')){
      morePagesElement.classList.add('more-pages-active');
    } else {
      morePagesElement.classList.remove('more-pages-active');
    }
  });

  const searchIcon = document.querySelector('.search-icon');
document.querySelector('.search-icon')
  .addEventListener('click', () => {
    const searchContainer = document.querySelector('.search-container');
    searchIcon.classList.toggle('search-active');

    if (searchIcon.classList.contains('search-active')){
      searchContainer.style.display = 'flex';
    } else {
      searchContainer.style.display = 'none';
    }
  });