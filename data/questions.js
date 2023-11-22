import {renderHTML} from '../scripts/main.js';

export const questions = [
  {
    number: '1',
    question: 'Maria __________ Brazilian.',
    choices: ['are', 'am', 'is', 'be'],
    answer: 'is',
  },
  {
    number: '2',
    question: "Paul's studying medicine because he wants to be a __________ .",
    choices: ['lawyer', 'teacher', 'doctor', 'builder'],
    answer: 'doctor',
  },
  {
    number: '3',
    question: 'Jim __________ got a car.',
    choices: ["doesn't", "hasn't", "isn't", "haven't"],
    answer: "hasn't",
  },
  {
    number: '4',
    question: 'John is __________ brother.',
    choices: ["Peter's", 'Peter', 'of Peter', 'Peter his'],
    answer: "Peter's",
  },
  {
    number: '5',
    question: "What's your __________ sport?",
    choices: ['important', 'favourite', 'beautiful', 'nice'],
    answer: 'favourite',
  },
  {
    number: '6',
    question: 'Excuse me. __________ time please?',
    choices: ['You have the', 'What is', 'Have you got the', 'What'],
    answer: 'Have you got the',
  },
  {
    number: '7',
    question: 'What time __________ get up in the morning?',
    choices: ['you', 'do you', 'are you', 'you do'],
    answer: 'do you',
  },
  {
    number: '8',
    question: 'I usually __________ at the supermarket on Saturday mornings.',
    choices: ['go for a drink', 'eat out', 'do sport', 'go shopping'],
    answer: 'go shopping',
  },
  {
    number: '9',
    question: 'What __________ Mary for her birthday?',
    choices: ['about buying', 'shall we buy', 'to buy', "let's"],
    answer: 'shall we buy',
  },
  {
    number: '10',
    question: 'My brother __________ in London.',
    choices: ['live', 'lives', 'is lived', 'living'],
    answer: 'lives',
  },
  {
    number: '11',
    question: '__________ there a restaurant near here?',
    choices: ['Are', 'Have', 'Do', 'Is'],
    answer: 'Is',
  },
  {
    number: '12',
    question: 'Do you prefer to have a __________ or a bath in your bathroom?',
    choices: ['shower', 'cooker', 'washing machine', 'fridge'],
    answer: 'shower',
  },
  {
    number: '13',
    question: 'How __________ is the cheese sandwich please?',
    choices: ['price', 'much', 'cost', 'money'],
    answer: 'much',
  },
  {
    number: '14',
    question:
      '__________ the food like at that Indian restaurant you went to last night?',
    choices: ['Did you', 'Was', 'What was', 'How did'],
    answer: 'What was',
  },
  {
    number: '15',
    question: 'I like __________ because I like to laugh.',
    choices: [
      'love stories',
      'comedies',
      'action films',
      'science fiction films',
    ],
    answer: 'comedies',
  },
  {
    number: '16',
    question: 'London is more __________ than Paris.',
    choices: ['dangerous', 'bigger', 'cleaner', 'noisier'],
    answer: 'dangerous',
  },
  {
    number: '17',
    question: '__________ to go for a pizza this evening?',
    choices: [
      'Do you like',
      'What do you want',
      'Would you rather',
      'Would you like',
    ],
    answer: 'Would you like',
  },
  {
    number: '18',
    question: 'Look! It __________ .',
    choices: ['rains', 'raining', 'does rain', 'is raining'],
    answer: 'is raining',
  },
  {
    number: '19',
    question: 'Hello, __________ I speak to Jane please?',
    choices: ['can', 'will', 'do', 'am'],
    answer: 'can',
  },
  {
    number: '20',
    question: "Peter loves giving presents, he's very __________ .",
    choices: ['selfish', 'shy', 'lazy', 'generous'],
    answer: 'generous',
  },
  {
    number: '21',
    question: "What's __________ ? You look upset.",
    choices: ['bad', 'happen', 'matter', 'wrong'],
    answer: 'wrong',
  },
  {
    number: '22',
    question: 'If you do more exercise, you will __________ .',
    choices: ['lose weight', 'stop to smoke', 'work less', 'have a holiday'],
    answer: 'lose weight',
  },
  {
    number: '23',
    question: 'To get to the Post Office, __________ at the end of this road.',
    choices: ['go along', 'go over', 'turn right', 'go past'],
    answer: 'turn right',
  },
  {
    number: '24',
    question: 'Bye bye, George! __________ a nice weekend!',
    choices: ['Make', 'Have', 'Do', 'Pass'],
    answer: "Have",
  },
  {
    number: '25',
    question: 'BILL : I really love football.\nJIM : __________ .',
    choices: ['Neither do I', 'So am I', 'So do I', 'Oh, I do'],
    answer: "So do I",
  },
  {
    number: '26',
    question: 'I __________ 18 years old when I started my first job.',
    choices: ['were', 'had', 'was', 'did'],
    answer: 'was',
  },
  {
    number: '27',
    question: "I didn't __________ TV last night.",
    choices: ['watched', 'watching', 'watch', 'not watched'],
    answer: 'watch',
  },
  {
    number: '28',
    question: 'My grandfather was born eighty years __________ .',
    choices: ['since', 'last', 'ago', 'before'],
    answer: 'ago',
  },
  {
    number: '29',
    question: 'It was nice to meet you. See you __________ , I hope.',
    choices: ['later', 'more', 'always', 'longer'],
    answer: 'later',
  },
  {
    number: '30',
    question: 'Many people prefer jobs with flexible __________ .',
    choices: ['working hours', 'office', 'salary', 'holiday pay'],
    answer: 'working hours',
  },
  {
    number: '31',
    question: "I'm __________ sorry, but I can't come to your party tonight.",
    choices: ['much', 'awful', 'really', 'such'],
    answer: 'really',
  },
  {
    number: '32',
    question: 'John __________ his wife in 2004.',
    choices: ['has met', 'met', 'did he meet', 'was met'],
    answer: 'met',
  },
  {
    number: '33',
    question: "I'm sure __________ a great time at the party next Saturday.",
    choices: ["we'll have", "we're having", 'we have', 'we go to have'],
    answer: "we'll have",
  },
  {
    number: '34',
    question: 'How much time do you __________ doing your English homework?',
    choices: ['work', ' give', 'make', 'spend'],
    answer: 'spend',
  },
  {
    number: '35',
    question: 'Are you going shopping? __________ with you if you like.',
    choices: ["I'll come", 'I come', "I'm coming", 'I can be coming'],
    answer: "I'll come",
  },
  {
    number: '36',
    question: 'Jane is the __________ girl in her class.',
    choices: ['richer', 'more popular', 'worse', 'happiest'],
    answer: 'happiest',
  },
  {
    number: '37',
    question:
      'Excuse me, I __________ if you could show me the way to the train station?',
    choices: ['would like', 'wonder', 'may ask', 'hope'],
    answer: 'wonder',
  },
  {
    number: '38',
    question: "You shouldn't __________ a lady how old she is.",
    choices: ['asked', 'ask', 'asking', 'to ask'],
    answer: 'ask',
  },
  {
    number: '39',
    question:
      'In England, people usually __________ hands when they first meet.',
    choices: ['kiss', 'shake', 'take', 'put'],
    answer: 'shake',
  },
  {
    number: '40',
    question: "Hurry up or we'll __________ our train!",
    choices: ['lose', 'fail', 'catch', 'miss'],
    answer: 'miss',
  },
  {
    number: '41',
    question: 'I was so __________ yesterday because I fell asleep in class!',
    choices: ['calm', 'nervous', 'guilty', 'embarrassed'],
    answer: 'embarrassed',
  },
  {
    number: '42',
    question: '__________ anything next Friday?',
    choices: ['Do you', 'Do you do', 'Would you do', 'Are you doing'],
    answer: 'Are you doing',
  },
  {
    number: '43',
    question: 'Many types of watches __________ in Switzerland.',
    choices: ['are made', 'made', 'are making', 'is made'],
    answer: 'are made',
  },
  {
    number: '44',
    question:
      "I like these trousers, but they don't __________ me. They're much too small!",
    choices: ['suit', 'size', 'fit', 'match'],
    answer: "fit",
  },
  {
    number: '45',
    question:
      "I __________ my driving test last week, so now I'll have to take it again.",
    choices: ['passed', 'lost', 'failed', 'got'],
    answer: "failed",
  },
  {
    number: '46',
    question: "SUSAN : I've got four sisters.\nRUTH : __________ you?",
    choices: ['Do', 'Got', 'Are', 'Have'],
    answer: 'Have',
  },
  {
    number: '47',
    question: 'What would you do if you __________ a million pounds?',
    choices: ['win', 'would win', 'won', 'winning'],
    answer: 'won',
  },
  {
    number: '48',
    question: "I'm trying to __________ money to buy a new car.",
    choices: ['save', 'waste', 'spend', 'lend'],
    answer: 'save',
  },
  {
    number: '49',
    question: "You're from Liverpool, __________ ?",
    choices: ["aren't you", "isn't it", "don't you", 'you are'],
    answer: "aren't you",
  },
  {
    number: '50',
    question: 'You __________ to study hard if you want to pass your exams.',
    choices: ['must', 'should', 'have', 'supposed'],
    answer: 'have',
  },
  {
    number: '51',
    question: "I'm usually too __________ after work to go out.",
    choices: ['furious', 'exhausted', 'fascinated', 'angry'],
    answer: 'exhausted',
  },
  {
    number: '52',
    question: 'My parents __________ married since 1985.',
    choices: ['have been', 'are', 'were', 'got'],
    answer: 'got',
  },
  {
    number: '53',
    question:
      'If you go to London, the Tate Modern is really worth __________ .',
    choices: ['to see', 'seeing', 'to be seen', 'see'],
    answer: 'seeing',
  },
  {
    number: '54',
    question: 'I __________ home yesterday when it started raining.',
    choices: ['walked', 'was walking', 'have walked', 'have been walking'],
    answer: 'was walking',
  },
  {
    number: '55',
    question:
      "John wants to be president of his company - he's very __________ !",
    choices: ['stubborn', 'responsible', 'ambitious', 'independent'],
    answer: 'ambitious',
  },
  {
    number: '56',
    question: 'People say English people tend __________ rather reserved.',
    choices: ['being', 'be', 'to be', 'be'],
    answer: 'to be',
  },
  {
    number: '57',
    question: 'I try to __________ my desk every day after work.',
    choices: ['go through', 'clear out', 'put away', 'tidy up'],
    answer: 'tidy up',
  },
  {
    number: '58',
    question:
      'The thing you open bottles with is __________ a bottle opener in English.',
    choices: ['said', 'spoken', 'named', 'called'],
    answer: 'called',
  },
  {
    number: '59',
    question: 'Take your umbrella __________ it rains.',
    choices: ['unless', 'because', 'as', 'in case'],
    answer: 'in case',
  },
  {
    number: '60',
    question: 'Could you __________ me a favour please?',
    choices: ['do', 'make', 'give', 'help'],
    answer: 'do',
  },
  {
    number: '61',
    question:
      'In order to log on to a computer, you sometimes need to enter a __________ .',
    choices: ['link', 'software', 'website', 'password'],
    answer: 'password',
  },
  {
    number: '62',
    question: 'Many new houses __________ in the town where I live.',
    choices: ['build', 'have been building', 'are being built', 'are building'],
    answer: 'are being built',
  },
  {
    number: '63',
    question:
      "__________ to post that card to Pete - it's his birthday tomorrow.",
    choices: [
      "If I were you, I'd",
      'You should',
      "Don't forget",
      "You'd better",
    ],
    answer: "Don't forget",
  },
  {
    number: '64',
    question: "I don't know many people __________ still smoke nowadays.",
    choices: ['they', 'what', 'which', 'who'],
    answer: "who",
  },
  {
    number: '65',
    question: 'Mary went to the party __________ of her headache.',
    choices: ['although', 'in spite', 'even though', 'despite'],
    answer: "in spite",
  },
  {
    number: '66',
    question: "I think I've got a cold. I can't stop __________ .",
    choices: ['to sneeze', 'sneezing', 'sneeze', 'the sneezing'],
    answer: 'sneezing',
  },
  {
    number: '67',
    question:
      "If you don't know the meaning of a word you can __________ in a dictionary.",
    choices: ['get it out', 'point it out', 'look it up', 'come up with it'],
    answer: 'look it up',
  },
  {
    number: '68',
    question: '__________ I opened the window?',
    choices: ['May', 'Would you mind if', 'Could', 'Do you mind'],
    answer: 'Would you mind if',
  },
  {
    number: '69',
    question: 'My doctor __________ me I should eat less meat.',
    choices: ['told', 'spoke to', 'said', 'told to'],
    answer: 'told',
  },
  {
    number: '70',
    question: 'Peter __________ me to go to the theatre with him next week.',
    choices: ['offered', 'invited', 'promised', 'suggested'],
    answer: 'invited',
  },
  {
    number: '71',
    question: "Sorry, I didn't quite __________ what you said.",
    choices: ['catch', 'listen', 'take', 'know'],
    answer: 'catch',
  },
  {
    number: '72',
    question: 'I wish I __________ get up early every morning!',
    choices: ["didn't have to", "mustn't", "hadn't", "wouldn't have to"],
    answer: "didn't have to",
  },
  {
    number: '73',
    question: 'Jane __________ from Cambridge University with a degree in Law.',
    choices: ['graduated', 'passed', 'studied', 'qualified'],
    answer: 'graduated',
  },
  {
    number: '74',
    question: "Hi Jenny. How's __________ it ?",
    choices: ['making', 'getting', 'going', 'doing'],
    answer: 'going',
  },
  {
    number: '75',
    question: "I don't smoke now, but I __________ smoke 20 a day!",
    choices: ['am used to', 'used to', 'use to', 'was used to'],
    answer: 'used to',
  },
  {
    number: '76',
    question: 'Paris is __________ the Eiffel Tower.',
    choices: ['famous for', 'impressed by', 'fascinated by', 'excited about'],
    answer: 'famous for',
  },
  {
    number: '77',
    question: "If I __________ earlier, I wouldn't have been late for work.",
    choices: ['left', 'was leaving', 'had left', 'have left'],
    answer: 'had left',
  },
  {
    number: '78',
    question:
      "JACK : Would you like me to help you?\nSUE : No it's OK, but thanks __________ .",
    choices: ['to offer', 'the offer', 'you offer', 'for offering'],
    answer: 'for offering',
  },
  {
    number: '79',
    question:
      'The film sounded interesting, but it __________ to be really boring.',
    choices: ['worked out', 'took off', 'came round', 'turned out'],
    answer: 'turned out',
  },
  {
    number: '80',
    question:
      "PETER : I've just won a million pounds!\nBILL : You must __________ !",
    choices: ['joke', 'be joking', 'make a joke', 'joking'],
    answer: 'be joking',
  },
  {
    number: '81',
    question: 'This time next week I __________ on the beach on holiday!',
    choices: ['will go to sit', 'am sitting', 'will sit', 'will be sitting'],
    answer: 'will be sitting',
  },
  {
    number: '82',
    question:
      'One argument __________ not smoking is that you save a lot of money!',
    choices: [
      'in favour of',
      'to agree with',
      "it'd be better if",
      'to make you',
    ],
    answer: 'in favour of',
  },
  {
    number: '83',
    question: 'I have never __________ to Scotland.',
    choices: ['been going', 'went', 'been', 'going'],
    answer: 'been',
  },
  {
    number: '84',
    question: '__________ my advice!',
    choices: ['Listen', 'Hear', 'Take', 'Do'],
    answer: "Take",
  },
  {
    number: '85',
    question: "It's usually cheaper to call a __________ than a mobile phone.",
    choices: ['voicemail', 'ring tone', 'landline', 'network'],
    answer: "landline",
  },
  {
    number: '86',
    question:
      'Sorry to bother you, but __________ I could have a word with you?',
    choices: [
      'I wonder',
      'it is possible',
      'I would like',
      'I was wondering if',
    ],
    answer: 'I was wondering if',
  },
  {
    number: '87',
    question:
      "I'm going to ask my bank for a __________ to redecorate the kitchen.",
    choices: ['credit', 'loan', 'savings', 'debt'],
    answer: 'credit',
  },
  {
    number: '88',
    question: "ANDREW : I'm sorry I'm late.\nDAVID : It __________ !",
    choices: ["doesn't matter", 'matters', 'never mind', 'alright'],
    answer: "doesn't matter",
  },
  {
    number: '89',
    question:
      'I was __________ tired last night that I fell asleep on the sofa.',
    choices: ['very', 'too', 'so', 'such'],
    answer: 'so',
  },
  {
    number: '90',
    question: 'Do you fancy __________ away for the weekend?',
    choices: ['to go', 'go', 'going', 'we go'],
    answer: 'going',
  },
  {
    number: '91',
    question: 'How often do you have __________ ?',
    choices: [
      'your hair cut',
      'cut your hair',
      'got your hair cut',
      'hair cut',
    ],
    answer: 'your hair cut',
  },
  {
    number: '92',
    question:
      "My husband is useless at home - he can't even __________ a light-bulb.",
    choices: ['change', 'put up', 'fix', 'dry-clean'],
    answer: 'change',
  },
  {
    number: '93',
    question: "What __________ me about Steve is that he's always late!",
    choices: ['bores', 'annoys', 'hates', 'dislikes'],
    answer: 'annoys',
  },
  {
    number: '94',
    question: 'By 2020 I believe we will __________ a settlement on Mars.',
    choices: ['have built', 'have been building', 'be built', 'been built'],
    answer: 'have built',
  },
  {
    number: '95',
    question: "It's difficult to __________ a living with a part-time job.",
    choices: ['get', 'make', 'work', 'do'],
    answer: 'make',
  },
  {
    number: '96',
    question: "I haven't got my keys. I __________ them at home.",
    choices: [
      'should have left',
      'must leave',
      "couldn't leave",
      'must have left',
    ],
    answer: 'must have left',
  },
];

export const userAnswers = JSON.parse(localStorage.getItem('user-answers')) || [];

export const userResults = JSON.parse(localStorage.getItem('user-results')) || [];

export function addToUserAnswers(userAnswer, number, userChoice) {
  let matchingAnswer;

  userAnswers.forEach((answer) => {
    if (number === answer.number) {
      matchingAnswer = answer;
    }
  });

  if (matchingAnswer) {
    matchingAnswer.answer = userAnswer;
    matchingAnswer.choice = userChoice;
  } else {
    userAnswers.push(
      {
        number,
        choice: userChoice,
        answer: userAnswer
      }
    )
  }
}

export function saveUserAnswers() {
  localStorage.setItem('user-answers', JSON.stringify(userAnswers));
}

function saveUserResults(){
  localStorage.setItem('user-results', JSON.stringify(userResults));
}


function removeUserAnswers() {
  localStorage.removeItem('user-answers');
}

function calculateResult() {
  questions.forEach((question) => {
    const { number, answer } = question;
    let matchingAnswer;

    userAnswers.forEach((userAnswer) => {
      if (number === userAnswer.number) {
        matchingAnswer = userAnswer;
      }
    });

    if (answer === matchingAnswer.answer) {
      userResults.push(
        {
          number,
          result: 'correct',
          yourAnswer: matchingAnswer.answer
        }
      );
    } else {
      userResults.push(
        {
          number,
          result: 'incorrect',
          yourAnswer: matchingAnswer.answer
        }
      );
    }

  });
}

function calUserScores() {
  let yourScore = 0;
  userResults.forEach((oneResult) => {
    if (oneResult.result === 'correct') {
      yourScore += 1;
    }
  });

  return yourScore;
}

function calLevel() {
  const score = calUserScores();
  let yourLevel;

  if (score <= 24) {
    yourLevel = 'Beginner';
  }
  else if (score <= 35) {
    yourLevel = 'Elementary';
  }
  else if (score <= 48) {
    yourLevel = 'Pre-intermediate';
  }
  else if (score <= 72) {
    yourLevel = 'Intermediate';
  }
  else if (score <= 96) {
    yourLevel = 'Upper-intermediate';
  }
  return yourLevel;
}

export function finishButtonToggle() {
  calculateResult();
  saveUserResults();
  removeUserAnswers();
  userScoresHTML();
}

export function userScoresHTML() {
  const html =
    `
  <div class="complete-container">
    <div class="complete-message">Well done for completing the test!</div>
    <div class="scores">Your score is ${calUserScores()} out of ${questions.length}.</div>
    <div class="your-level">And your English level is ${calLevel()}.</div>
    <button class="review-button">Review your answers</button>
    <button class="reset-button">Retake the test</button>
  </div>
  `;

  document.querySelector('.all-questions-container')
    .innerHTML = html;
  document.querySelector('.buttons')
    .style.display = 'none';
  document.querySelector('.current-page')
    .style.display = 'none';
  document.querySelector('.title')
    .innerHTML = 'ENGLISH LEVEL TEST - RESULTS';

    document.querySelector('.review-button')
    .addEventListener('click', () => {
      reviewYourAnswersHTML();
    });

    document.querySelector('.reset-button')
    .addEventListener('click', () => {
      resetUserResults();
      refreshPage();
    });
}

function reviewYourAnswersHTML(){
  let html = '';

  userResults.forEach((results) => {
    const {number, result, yourAnswer} = results;

    let matchingQuestion;

    questions.forEach((question) => {
      if (question.number === number){
        matchingQuestion = question;
      }
    });

  const {answer, question} = matchingQuestion;


    if (yourAnswer === answer){
      html += `
      <div class="question-container">
      <div class="question">
        <div class="number correct-number">${number}</div>
        <div class="text">${question}</div>
      </div>
      <div class="correct-text">Correct (your answer)</div>
      <div class="choice-container correct-border">
        <img class="correct-icon" src="images/correct-icon.png">
        <div class="choice">${yourAnswer}</div>
      </div>
    </div>
      `;
    } else {

      html +=  `
      <div class="question-container">
      <div class="question">
        <div class="number incorrect-number">${number}</div>
        <div class="text">${question}</div>
      </div>
      <div class="incorrect-text">Incorrect (your answer)</div>
      <div class="choice-container incorrect-border">
        <img class="incorrect-icon" src="images/incorrect-icon.png">
        <div class="choice">${yourAnswer}</div>
      </div>
      <div class="correct-text">Correct</div>
      <div class="choice-container correct-border">
        <img class="correct-icon" src="images/correct-icon.png">
        <div class="choice">${answer}</div>
      </div>
    </div>
      `;
    }

  });

  document.querySelector('.all-questions-container')
    .innerHTML = `
    ${html}
    <div>
    <button class="back-to-results-btn ">
      Back to results
    </button>
    </div>
    `;
    document.querySelector('.title')
    .innerHTML = 'ENGLISH LEVEL TEST - Review your answers';

  document.querySelector('.back-to-results-btn')
    .addEventListener('click', () => {
      userScoresHTML();
    });

}

function resetUserResults(){
  localStorage.removeItem('user-results');
}

function refreshPage(){
  window.location.reload();
}