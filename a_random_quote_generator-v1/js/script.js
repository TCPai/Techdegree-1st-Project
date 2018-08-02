// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
var stringOfQuoteProperties = '';
var quotes =[
  {
    quote: 'Have no fear of perfection, you will never reach it.',
    source: 'Salvador Dali',
    citation: 'Germany',
    year: '1950'
  },
  {
    quote: 'You never fail until you stop trying.',
    source: 'Albert Einstein',
    citation: '',
    year: ''
  },
  {
    quote: 'If you want to run, run a mile. If you want to experience a different life, run a marathon.',
    source: 'Emil Zatopek',
    citation: '',
    year: ''
  },
  {
    quote: 'The pride in finishing a marathon is much greater than all the pain endured during the marathon.',
    source: 'Hal Higdon',
    citation: '',
    year: ''
  },
  {
    quote: 'The miracle is not that I finished. It is that I had the courage to start.',
    source: 'John Bingham',
    citation: '',
    year: ''
  }
]

function getStudentReport (student) {
  var report = '<h2>Student: ' + student.name + '</h2>';
  report += '<p>Track: ' + student.track + '</p>';
  report += '<p>Points: ' + student.points + '</p>';
  report += '<p>Achievements: ' + student.achievements + '</p>';
}

// Create the getRandomQuote function and name it getRandomQuote

function getRandomQuote () {
var randomNumber = Math.floor(Math.random() * quotes.length );
displayQuote = quotes [randomNumber];
stringOfQuoteProperties = '<p class="quote">' + displayQuote.quote + '</p>';
stringOfQuoteProperties += '<p class="source">' + displayQuote.source + '</p>';
stringOfQuoteProperties += '<span class="citation">' + displayQuote.citation + '</span>';
stringOfQuoteProperties += '<span class="year">' + displayQuote.year + '</span>';
}

// Create the printQuote funtion and name it printQuote

function printQuote () {
  getRandomQuote();
document.getElementById('quote-box').innerHTML = stringOfQuoteProperties;
}

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
