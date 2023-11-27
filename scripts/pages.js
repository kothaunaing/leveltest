import { posts } from "../data/posts.js";
import { today } from '../scripts/main.js';

export function homeHTML() {
  let html = '';

  posts.forEach((post) => {
    const { caption, uploadTime, images, id } = post;

    html += `
    <div class="posts">
      <div class="post-top-section">
        <img class="sea-icon" src="images/logo square.jpg">
        <div>
          <div class="sea-name">Star Eduaction Academy (SEA)</div>
          <div class="day-counter" data-upload-time="${uploadTime}">
            ${agoFormat(uploadTime)}
          </div>
        </div>
      </div>
      <div class="post-middle-section">
        ${caption}
      </div>
      <div class="post-bottom-section">
        ${imageHTML(images, id)}
      </div>
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

    document.querySelectorAll('.post-image-container')
      .forEach((element) => {
        element.addEventListener('click', () => {
          const {postId} = element.dataset;
          showPostImages(postId);
        });
      });

      setInterval(() => {
        document.querySelectorAll('.day-counter')
          .forEach((element) => {
            const {uploadTime} = element.dataset;
            element.innerHTML = agoFormat(Number(uploadTime));
          });
      }, 1000);

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

function imageHTML(images, id) {
  let html = '';
  const moreImages = images.length - 4;
  images.forEach((image, index) => {
    if (index < 4) {
      if (index === 3) {
        html += `
        <a href="#image-${index+1}">
        <div class="post-image-container"
        data-post-id="${id}">
          <img class="post-image" src="images/posts/1/${image}">
          <div class="more-images">+${moreImages}</div>
        </div>
        </a>
      `;
      } else {
        html += `
        <a href="#image-${index+1}">
        <div class="post-image-container"
        data-post-id="${id}">
          <img class="post-image" src="images/posts/1/${image}">
        </div>
        </a>
      `;
      }
    }
  });

  if (images.length === 0) {
    html = '';
  }

  return html;
}

function showPostImages(postId){
  let matchingPost;
  let html = '';

  posts.forEach((post) => {
    if (postId === post.id){
      matchingPost = post;
    }
  });

  const { images, id, caption } = matchingPost;

  images.forEach((image, index) => {
    html += `
    <img class="post-image" src="images/posts/1/${image}" id="image-${index+1}">
    `;
  });

  document.querySelector('.app-display')
  .innerHTML =
  `<div class="home-container">
    <img class="back-icon" src="images/back-icon.png">
    <div>${caption}</div>
    <div class="post-images">
    ${html}
    </div>
  </div>
  `;

  document.querySelector('.back-icon')
    .addEventListener('click', () => {
      homeHTML();
    });
}

function agoFormat(uploadTime){
  const currentTime = new Date().getTime();
  const timeDifference = currentTime - uploadTime;

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years > 0){
    return years === 1 ? 'a year ago' : `${years} years ago`;
  }
  else if (months > 0){
    return months === 1 ? 'a month ago' : `${months} months ago`;
  }
  else if (days > 0){
    return days === 1 ? 'a day ago' : `${days} days ago`;
  }
  else if (hours > 0){
    return hours === 1 ? 'an hour ago' : `${hours} hours ago`;
  }
  else if (minutes > 0){
    return minutes === 1 ? 'a minute ago' : `${minutes} minutes ago`;
  }
  else if (seconds > 0){
    return seconds === 1 ? 'a second ago' : `${seconds} seconds ago`;
  }
}