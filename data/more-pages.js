import { levelTestHTML } from "../scripts/main.js";
import { homeHTML, aboutHTML, contactHTML } from "../scripts/pages.js";
import { userResults, userScoresHTML } from "./questions.js";

const pages = [
  {
    title: 'Home',
    active: false
  },
  {
    title: 'Contact',
    active: false
  },
  {
    title: 'About',
    active: false
  },
  {
    title: 'English Level Test',
    active: true
  }
];

export function pagesHTML() {
  let html = '';

  pages.forEach((page) => {
    const { title, active } = page;

    html += `
      <div class="page ${active ? 'active-page' : ''}" 
      data-page-name="${title}">
        ${title}
      </div>
    `;
  })

  document.querySelector('.pages-container')
    .innerHTML = html;

  document.querySelectorAll('.page')
    .forEach((element) => {
      element
        .addEventListener('click', () => {
          const { pageName } = element.dataset;
          let matchingPage;

          pages.forEach((page) => {
            if (pageName === page.title) {
              matchingPage = page;
            }
            page.active = false;
          });

          matchingPage.active = true;
          pagesHTML();

          if (pageName === 'English Level Test') {
            if (userResults.length === 0) {
              levelTestHTML();
            } else {
              userScoresHTML();
            }
          }
          else if (pageName === 'Home') {
            homeHTML();
          }
          else if (pageName === 'About') {
            aboutHTML();
          }
          else if (pageName === 'Contact') {
            contactHTML();
          }
        });
    });
}