const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// works project section
const array = [{
  cardName: 'Tonic',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  featuredimage: '/images/Snapshoot Portfolio.png',
  technologies: ['html', 'css', 'javaScrip'],
  Information: { orgnization: 'CANOPY', type: 'Back END Dev', year: 2015 },
  linkToLive: '#',
  linkToSource: '#',
},

{
  cardName: 'Multi-Post Stories',
  description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
  featuredimage: '/images/Snapshoot Portfolio3.png',
  technologies: ['html', 'css', 'javaScrip'],
  Information: { orgnization: 'CANOPY', type: 'Back END Dev', year: 2015 },
  linkToLive: '#',
  linkToSource: '#',
},

{
  cardName: 'Facebook 360',
  description: 'Exploring the future of media in Facebooks first Virtual Reality app a place to discover and enjoy 360 photos and videos on Gear VR.',
  featuredimage: '/images/Snapshoot Portfolio (1).png',
  technologies: ['html', 'css', 'javaScrip'],
  Information: { orgnization: 'CANOPY', type: 'Back END Dev', year: 2015 },
  linkToLive: '#',
  linkToSource: '#',
},

{
  cardName: 'Uber Navigation',
  description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
  featuredimage: '/images/Snapshoot Portfolio (2).png',
  technologies: ['html', 'css', 'javaScrip'],
  Information: { orgnization: 'CANOPY', type: 'Back END Dev', year: 2015 },
  linkToLive: '#',
  linkToSource: '#',
},
];

// work section
array.forEach((card, index) => {
  const works = document.getElementById('works');
  const cardItem = document.createElement('div');
  cardItem.id = `article${index + 2}`;
  cardItem.innerHTML = `
  <div class="header_2">
  <img src='${card.featuredimage}' alt="Snapshoot Portfolio" class="portfolio_img" width="100%" height="100%">
  </div>
  <div class="section_2">
  <nav><h2 class="ton">${card.cardName}</h2></nav>
  <ul class="flex-ul">
      
      <li class="cano">${card.Information.orgnization}</li>
      <img src="./images/Counter.png" alt="dot">
      <li class="back_end">${card.Information.type}</li>
      <img src="./images/Counter.png" alt="dot">
      <li class="back_end">${card.Information.year}</li>
  </ul>
  <div class="info">
      <p class="word">${card.description}</div>
  <ul class="lang">
      <li class="html_lang">html</li>
      <li class="css_lang">css</li>
      <li class="js_lang">javaScript</li>
  </ul>
  <nav class="action">
      <button id='click${index + 1}' type="button" class="click">See Project</button>
  </nav>
  </div>
`;

  works.appendChild(cardItem);
});

// detail section

array.forEach((card, index) => {
  const works = document.getElementById('works');
  const popup = document.createElement('div');
  popup.className = 'display-none';
  popup.id = `card-detail${index + 1}`;
  popup.innerHTML = `
  <div id=details>
  <div class="card-detail">
    <div class="detail-header">
        <div class="tonic-close">
        <h2 class="tonic-detail">${card.cardName}</h2>
        <img id='icon-close${index + 1}' src="./images/icon2.png" sytle="z-index:10;" alt="close">
        </div>
        <ul class="frame-2">
        <li>${card.Information.orgnization}</li><li><img src="./images/Counter.png" alt=""></li>
        <li>${card.Information.type}</li><li><img src="./images/Counter.png" alt=""></li>
        <li>${card.Information.year}</li>
        </ul>
        </div>
        <img src='${card.featuredimage}'>
        <div class="detail-block">
        <p class="detail-info">${card.description}</p>
        <div class="detail-skills">
        <ul class="detail-tags">
        <li class="lang-tangs">html</li>
        <li class="lang-tangs">css</li>
        <li class="lang-tangs">JavaScript</li>
        </ul>
        <div class="button-action">
        <button class="see-button">See live <img src="./images/Icon.png"  alt=""></button>
        <button class="see-button">See source <img src="./git.jpg" alt=""></button>
        </div>
        </div>
      </div>
    </div>
    </div>
  
  `;

  works.appendChild(popup);
});

// popups

const openTonic = document.getElementById('click1');
const openMulti = document.getElementById('click2');
const openFacebook = document.getElementById('click3');
const openUber = document.getElementById('click4');

const close1 = document.getElementById('icon-close1');
const close2 = document.getElementById('icon-close2');
const close3 = document.getElementById('icon-close3');
const close4 = document.getElementById('icon-close4');

const showTonic = document.getElementById('card-detail1');
const showMulti = document.getElementById('card-detail2');
const showFacebook = document.getElementById('card-detail3');
const showUber = document.getElementById('card-detail4');

openTonic.addEventListener('click', () => {
  showTonic.classList.toggle('card-detail');
  showTonic.classList.toggle('display-none');
});

close1.addEventListener('click', () => {
  showTonic.classList.toggle('card-detail');
  showTonic.classList.toggle('display-none');
});

openMulti.addEventListener('click', () => {
  showMulti.classList.toggle('card-detail');
  showTonic.classList.toggle('display-none');
});

close2.addEventListener('click', () => {
  showMulti.classList.toggle('card-detail');
  showTonic.classList.toggle('display-none');
});

openFacebook.addEventListener('click', () => {
  showFacebook.classList.toggle('card-detail');
  showTonic.classList.toggle('display-none');
});

close3.addEventListener('click', () => {
  showFacebook.classList.toggle('card-detail');
  showTonic.classList.toggle('display-none');
});

openUber.addEventListener('click', () => {
  showUber.classList.toggle('card-detail');
  showTonic.classList.toggle('display-none');
});

close4.addEventListener('click', () => {
  showUber.classList.toggle('card-detail');
  showTonic.classList.toggle('display-none');
});

// email validation

const form = document.forms[0];
const email = form.elements[1];
const submit = document.querySelector('button[type=submit]');
const message = document.querySelector('form > span');
submit.addEventListener('click', (event) => {
  const { value } = email;
  const lowercase = value.toLowerCase();
  if (value !== lowercase) {
    event.preventDefault();
    message.style.color = '#ffffff';
    message.innerHTML = 'Please write your email in lowercase.';
  }
});