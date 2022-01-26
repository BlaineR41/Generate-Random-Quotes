/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
  {
    quote:'Money and success dont change people they merely amplify what is already there', source: 'Will Smith', citation:'Will', year: 2020
  },
  {
    quote:'Success is a decision not a gift.', source: 'Ben Bergeron', citation:'Chasing Excellence A Story About Building the Worlds Fittest Athletes', year: 2017
  },
  {
    quote:'It always seems impossible until its done', source: 'Nelson Mandela', citation:'Long Walk to Freedom', year:1990
  },
  {
    quote:'Faith is taking the first step even when you cant see the whole staircase', source: 'Martin Luther King jr', citation:'Why We Can Not Wait', year:1963
  },
  {
    quote:'Don’t let your alarm clock, be the only reason you wake up.', source: 'Ray Lewis', year:'unknown'
  },
  {
    quote:'I can accept failure everyone fails at something. But I cant accept not trying.', source: 'Michael Jordan', citation:'Driven From Within', year:2005
  },
  {
    quote:'I am going to do today what other people will not do so I can do tomorrow what other people wont be able to do.', source: 'Matt Fraser', year:'unknown'
  }
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote () {
  let randomNum = Math.floor (Math.random()*quotes.length);
  let randomQuote = quotes[randomNum];
  return randomQuote;
}

/***
 * `printQuote` function
***/
function printQuote () {
  let randomQuote = getRandomQuote();
  let quoteBox = document.getElementById("quote-box");
  let html = `<p class="quote"> ${randomQuote.quote}</p>
              <p class="source"> ${randomQuote.source}
              <span class="citation"> ${randomQuote.citation}</span>
              `;
  if(randomQuote.year !='unknown') {
    html += `<span class="year"> ${randomQuote.year} </span>`;
  }
  html += '</p>';
  quoteBox.innerHTML = html;
  return document.body.style.backgroundColor=getColor();
  
}

//Create random color backgrounds on each click
function getColor(){
  let r = Math.floor(Math.random()*256);
  let g = Math.floor(Math.random()*256);
  let b = Math.floor(Math.random()*256);
  
  let rgbColor = `rgb(${r}, ${g}, ${b}`;
  return (rgbColor);
}

//create automatic timer every 5 seconds
let timer = setInterval(printQuote, 5000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);