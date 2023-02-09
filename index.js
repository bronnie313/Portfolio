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
      <button type="button" class="click">See Project</button>
  </nav>
  </div>
`;

  works.appendChild(cardItem);
});
