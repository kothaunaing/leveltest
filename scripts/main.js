import {
  questions, addToUserAnswers,
  userAnswers, saveUserAnswers,
  finishButtonToggle, userScoresHTML,
  userResults, refreshPage,
  removeUserAnswers
} from "../data/questions.js";
import { pagesHTML, pages } from '../data/more-pages.js';
import { studentsHTML, homeHTML, aboutHTML, contactHTML } from "../scripts/pages.js";

// import { changeTime, removeTimer } from "./timer.js";

const questionsPerPage = 5;
const totalPages = Math.ceil((questions.length / questionsPerPage));

let leftQuestions = JSON.parse(localStorage.getItem('left-questions')) || questions.slice();
let currentQuestions = JSON.parse(localStorage.getItem('current-questions')) || leftQuestions.splice(0, questionsPerPage);
let answeredQuestions = JSON.parse(localStorage.getItem('answered-questions')) || questionsPerPage;
export const today = dayjs();
let currentPage;

levelTestHTML();
pagesHTML();
showCurrrentYear();

if (userResults.length !== 0) {
  userScoresHTML();
}

export function levelTestHTML() {
  currentPage = calculateCurrentPage();

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
    .style.display = 'block';
  document.querySelector('.title')
    .innerHTML = 'ENGLISH LEVEL TEST';

  document.querySelector('.app-display')
    .innerHTML = `
    <div class="level-test-html">
      <div class="error-message">
        <img class="error-icon" src="images/error-icon.png">
        <div>You must answer all questions before proceeding.</div>
      </div>
      <div class="current-page">
        <div>Page ${currentPage} of ${totalPages}</div>
        <button class="stop-button js-stop-button">Stop</button>
      </div>
      <div class="progress-bar-container">
        <div class="progress-bar" style="width: ${(userAnswers.length / questions.length) * 100}%;">
        </div>
        <div class="progress-percentage">
        ${Math.round(((userAnswers.length / questions.length) * 100))}%
        </div>
      </div>
      ${html}
      <div class="buttons">
        <button class="next-button">Next</button>
        <button class="finish-button">Finish</button>
      </div>
    </div>
    `;

  checkIfcompleteTheTest();

  document.querySelectorAll('.js-choice-container')
    .forEach((element) => {
      element.addEventListener('click', () => {
        const { userAnswer, number, userChoice } = element.dataset;
        addToUserAnswers(userAnswer, number, userChoice);
        levelTestHTML();
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
  currentQuestions = leftQuestions.splice(0, questionsPerPage);
  answeredQuestions += currentQuestions.length;
}

function goToNextPage() {
  calculateCurrentQuestions();
  levelTestHTML();
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
const menuIconElement = document.querySelector('.js-menu-icon');
morePagesElement.style.marginTop = `-${morePagesElement.scrollHeight}px`;


menuIconElement
  .addEventListener('click', () => {
    menuIconElement.classList.toggle('menu-icon-active');

    if (menuIconElement.classList.contains('menu-icon-active')) {
      morePagesElement.classList.add('more-pages-active');
      morePagesElement.style.marginTop = `8px`;
    } else {
      morePagesElement.classList.remove('more-pages-active');
      morePagesElement.style.marginTop = `-${morePagesElement.scrollHeight}px`;
    }
  });

const searchContainer = document.querySelector('.search-container');
document.querySelector('.search-icon')
  .addEventListener('click', () => {
    searchContainer.classList.add('search-container-active');
    studentsHTML();
  });

document.querySelector('.close-search-icon')
  .addEventListener('click', () => {
    searchContainer.classList.remove('search-container-active');
    goToActivePage();
  });

function goToActivePage() {

  let activePage;

  pages.forEach((page) => {
    if (page.active) {
      activePage = page;
    }
  });

  if (activePage.title === 'Home') {
    homeHTML();
  }
  else if (activePage.title === 'About') {
    aboutHTML();
  }
  else if (activePage.title === 'Contact') {
    contactHTML();
  }
  else if (activePage.title === 'English Level Test') {
    levelTestHTML();
  }
}

const searchElement = document.querySelector('.search-input');

searchElement.addEventListener('input', () => {
  showAndHideClearButton();
  studentsHTML();
});

searchElement.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    studentsHTML();
  }
});

const clearButton = document.querySelector('.clear-icon-right');

clearButton
  .addEventListener('click', () => {
    searchElement.value = '';
    showAndHideClearButton();
    studentsHTML();
  });

function showAndHideClearButton() {
  const searchValue = searchElement.value;

  if (searchValue.length) {
    clearButton.style.display = 'block';
  } else {
    clearButton.style.display = 'none';
  }
}

// Dark Mode Feature

const darkModeButton = document.querySelector('.dark-mode-button');
let theme = localStorage.getItem('theme') || 'light-mode';

if (theme === 'dark-mode') {
  changeToDarkMode();
  darkModeButton.classList.toggle('dark-mode-button-active');
  changeDarkModeIcon();
}

changeDarkModeIcon();

darkModeButton
  .addEventListener('click', () => {
    changeToDarkMode();
    darkModeButton.classList.toggle('dark-mode-button-active');
    changeDarkModeIcon();
    localStorage.setItem('theme', theme);
  });


function changeToDarkMode() {
  document.body.classList.toggle('dark-mode');
  document.querySelector('.header').classList.toggle('dark-mode');
  document.querySelector('.footer').classList.toggle('dark-mode');
  document.querySelector('.js-more-pages').classList.toggle('dark-mode');
  document.querySelector('.confirm-message').classList.toggle('dark-mode');
  document.querySelector('.search-input').classList.toggle('search-bar-dark-mode');
}

function changeDarkModeIcon() {
  let image;
  if (darkModeButton.classList.contains('dark-mode-button-active')) {
    image = 'light';
    theme = 'dark-mode';
  } else {
    image = 'dark';
    theme = 'light-mode';
  }
  darkModeButton
    .innerHTML = `
  <img class="dark-mode-icon" src="images/${image}-icon.png">
  `;
}

window.addEventListener('scroll', () => {
  const totalHeight = document.documentElement.scrollHeight - 700;
  const currentHeight = document.documentElement.scrollTop;
  const percentage = (currentHeight / totalHeight) * 100;

  document.querySelector('.js-scroll-percentage')
    .style.width = `${percentage}%`;
});

function showCurrrentYear() {
  const currentYear = today.format('YYYY');

  document.querySelector('.current-year')
    .innerHTML = currentYear;
}

//console.log(new Date().getTime())