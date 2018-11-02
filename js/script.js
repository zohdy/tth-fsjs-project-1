/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

document.addEventListener("DOMContentLoaded", () => {
    // When the HTML doc has been loaded and parsed call the printQuote function every 5 sec.
    let intervalID = setInterval(printQuote, 5000);
    // If user clicks on the button a new quote is shown and the current interval is cleared and reset.
    document.getElementById('loadQuote').addEventListener("click", () => {
        clearInterval(intervalID);
        printQuote();
        intervalID = setInterval(printQuote, 5000);
    });
});


// Inits an array of objects to hold data for all the quotes
const quotes = [
    {
        quote: 'There\'s no place like home.”',
        source: 'Dorothy Gale',
        year: '1939',
        citation: 'The Wizard of Oz',
        tags: ['movie', 'home', 'family']
    },
    {
        quote: 'Carpe diem. Seize the day, boys. Make your lives extraordinary.',
        source: 'John Keating',
        year: '1989',
        citation: 'Dead Poets Society',
        tags: ['movie', 'carpe-diem', 'live-in-the-moment', 'life']
    },
    {
        quote: 'Don\'t cry because it\'s over, smile because it happened.',
        source: 'Dr. Seuss',
        tags: ['cry', 'experience', 'happiness', 'joy', 'life', 'optimism', 'sadness', 'smile']
    },
    {
        quote: 'Be yourself; everyone else is already taken.',
        source: 'Oscar Wilde',
        tags:['be-yourself', 'honesty', 'inspirational']
    },
    {
        quote: 'So many books, so little time.',
        source: 'Frank Zappa',
        tags: ['books', 'humor']
    },
    {
        quote: 'A room without books is like a body without a soul.',
        source: 'Marcus Tullius Cicero',
        tags:['books', 'simile', 'soul']
    },
    {
        quote: 'You only live once, but if you do it right, once is enough.',
        source: 'Mae West',
        tags:['humor', 'life']
    }
];

// Generates a random number based on the length of the 'quotes' array. The method will return a quote object
// from the random generated index number.
const getRandomQuote = (array) => array[Math.floor(Math.random() * array.length - 1) + 1];

function printQuote(){
    // Stores the quote object from the returned function, in the currentQuote variable
    const currentQuote = getRandomQuote(quotes);
    // Inits a string to contain all the HTML
    let quoteHTML = "";
    // Conditional to check if the current quote-object has the properties year or citation
    if(currentQuote.hasOwnProperty('year') && currentQuote.hasOwnProperty('citation')){
        // If conditional passes add this HTML markup to quoteHTML string
        // Object values are dynamically passed in using ${} expressions
        quoteHTML += `<p class="quote">${currentQuote.quote}</p>
                      <p class="tags">${currentQuote.tags.join(" | ")}</p>
                      <p class="source">${currentQuote.source}
                          <span class="citation">${currentQuote.citation}</span>
                          <span class="year">${currentQuote.year}</span>
                      </p>`;
    } else {
        // If quote-object doesn't contain the properties of year and citation add this piece of markup instead
        quoteHTML += `<p class="quote">${currentQuote.quote}</p>
                      <p class="tags">${currentQuote.tags.join(" | ")}</p>
                      <p class="source">${currentQuote.source}</p>`;
    }
    // Replace the quote-box div innerHTML with the markup inside our quoteHTML string.
    document.querySelector('#quote-box').innerHTML = quoteHTML;

    // Finally call the function to set the new background-color
    changeBgColor();
}

function changeBgColor() {
        // Randomize RGB values. Max values are set to 200 to avoid conflicting with the white text.
        const x = Math.floor(Math.random() * 200);
        const y = Math.floor(Math.random() * 200);
        const z = Math.floor(Math.random() * 200);

        document.body.style.background = "rgb(" + x + "," + y + "," + z + ")";
}
