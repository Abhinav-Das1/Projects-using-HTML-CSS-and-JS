const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const newQuoteButton = document.getElementById('new-quote');

// API URL
const apiURL = 'https://api.quotable.io/random';

// Function to fetch a new quote from the API
function getNewQuote() {
  fetch(apiURL)
    .then(response => response.json())
    .then(data => {
      quoteText.textContent = `"${data.content}"`;
      quoteAuthor.textContent = `- ${data.author}`;
    })
    .catch(error => console.log('Error:', error));
}

// Add event listener for the "Generate Quote" button
newQuoteButton.addEventListener('click', getNewQuote);