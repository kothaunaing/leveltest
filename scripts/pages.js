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
    .innerHTML = `
    <article>
          <p><b>SEA</b> stands for Star Education Academy,
            is an education academy founded by U Mg Aye Kyaw and Daw Sandar Lwin
            in 2015. At <b>SEA</b>, you can study variety of subjects including
            English Language and four skills,
            Philosophy, Maths and Science.</p>
        </article>

        <article>
          <p>
            <b>SEA</b> သည် Star Education Academy ၏ အတိုကောက် ဖြစ်ပြီး ၂၀၁၅ ခုနှစ်တွင်
            ဆရာဦးမောင်အေးကျော်နှင့်
            ဆရာမဒေါ်စန္ဒာလွင်တို့ တည်ထောင်ခဲ့သော သင်တန်းကျောင်းတစ်ခု ဖြစ်သည်။ <b>SEA</b> သင်တန်းကျောင်း၌
            အင်္ဂလိပ်ဘာသာစကား၊ ဒဿနိကဘာသာရပ်၊ သင်္ချာ နှင့်
            သိပ္ပံသာသာရပ်စသော ဘာသာရပ်များစွာကို လေ့လာနိုင်သည်။
          </p>
        </article>
        <article>
          <p> ယခု <b>SEA</b> သင်တန်းကျောင်း၌ အခြေခံမူလတန်း KG မှ Grade 9 အထိ ကျူရှင် သင်တန်းလည်း
            သင်ကြားပေးလျှက်ရှိသည်။ </p>
        </article>
      </div>
    </div>
    </section>

    <section class="section">
    <div class="teacher-div">
      <div class="teachers">
        <div><img src="images/logo square.jpg"></div>
        <div>U Mg Aye Kyaw</div>
      </div>
      <div class="teachers">
        <div><img src="images/logo square.jpg"></div>
        <div>Daw Sandar Lwin</div>
      </div>
    </div>
    </section>
    `;
}

export function contactHTML() {
  document.querySelector('.title')
    .style.display = 'none';
  document.querySelector('.app-display')
    .innerHTML = `
    <section class="section">
      <div class="contact">
        <div class="contact-info-container">
          <div class="col">
            <img class="icons" alt="address icon" src="images/address.svg">
          </div>
          <div class="col">
            Gaung Wine Gyi Village, Twantay Township, Yangon
          </div>
        </div>
        <div class="contact-info-container">
          <div  class="col">
            <img class="icons" alt="address icon" src="images/icons8_call.svg">
          </div>
          <div  class="col">
            09777728707, 09777790652
          </div>
        </div>
        <div class="contact-info-container">
          <div  class="col">
            <img class="icons" alt="address icon" src="images/icons8_facebook.svg">
          </div>
          <div  class="col">
            <a title="Facebook Page" href="https://www.facebook.com/sayakyawenglishclass">
              STAR Education Academy - SEA
            </a>
          </div>
        </div>
        <div class="contact-info-container">
          <div class="col">
            <img class="icons" alt="address icon" src="images/icons8_gmail.svg">
          </div>
          <div class="col">
            <a type="email" href="mailto:koayekyawjob@gmail.com">
                seacademy@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
    `;
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