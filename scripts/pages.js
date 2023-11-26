import { posts } from "../data/posts.js";
import {today} from '../scripts/main.js';

export function homeHTML() {
  let html = '';

  posts.forEach((post) => {
    const { text, day, images } = post;

    html += `
    <div class="posts">
      <div class="post-top-section">
        <img class="sea-icon" src="images/logo square.jpg">
        <div>
          <div class="sea-name">Star Eduaction Academy (SEA)</div>
          <div class="day-counter">
            ${day}
          </div>
        </div>
      </div>
      <div class="post-middle-section">
        ${text}
      </div>
    ${imageHTML(images)}
    </div>
    `;
  });

  document.querySelector('.title')
    .style.display = 'none';
  document.querySelector('.app-display')
    .innerHTML = 
    `<div class="home-container">
    ${html}
    </div>
    `;

  document.querySelectorAll('.post-image')
    .forEach((element) => {
      element.addEventListener('click', () => {
        showImageViewer(element);
      });
    });

    document.querySelector('.close-image')
      .addEventListener('click', () => {
        hideImageViewer();
      });
}

const imageViewer = document.querySelector('.image-viewer');
function showImageViewer(element) {
  imageViewer.style.display = 'flex';
  const currentImage = document.querySelector('.current-image');
  currentImage.src = element.src;
}

function hideImageViewer() {
  imageViewer.style.display = 'none';
}

export function aboutHTML() {
  document.querySelector('.title')
    .style.display = 'none';
  document.querySelector('.app-display')
    .innerHTML = 'Working on this feature';
}

export function contactHTML() {
  document.querySelector('.title')
    .style.display = 'none';
  document.querySelector('.app-display')
    .innerHTML = 'Working on this feature';
}

function imageHTML(images) {
  let html = '';

  images.forEach((image) => {
    html += `
      <img class="post-image" src="images/posts/${image}">
    `;
  });

  if (images.length === 0) {
    html = '';
  }

  return `
  <div class="post-bottom-section">
  ${html}
 </div>`;
}