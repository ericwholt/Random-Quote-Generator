/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

var intervalID = window.setInterval(printQuote, 20000); // researched from https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
var lastIndex = 0;
/*
  Description for print()
  Parameter 'message' takes a string and id takes a string. 
  message string will replace content inside the element with id of parameter
*/
function print(id, message) {
  document.getElementById(id).innerHTML = message;
}

/*
  Description for getRandomQuote() funtion
  Parameter 'quotesArray' takes an array of objects. 
  This function returns a random quote object from the quotesArray
*/
function getRandomQuote(quotesArray) {
  var index = Math.floor(Math.random() * quotesArray.length);

  while (index === lastIndex) {
    index = Math.floor(Math.random() * quotesArray.length);
  }

  lastIndex = index;
  var quote = quotesArray[index];
  return quote;
}

/*
  Description for printQuote() funtion
  This function first gets a random quote object by calling getRandomQuote function with an array parameter
  it then builds a string using properties of the quote object and finally passes the string to the print function. 
  Also passes tags string to print function
*/
function printQuote() {
  var quote = getRandomQuote(quotes);
  var html = "";
  html += `<p class="quote">${quote.quote}</p>`;
  html += `<p class="source">${quote.source}`;

  if (quote.citation) {
    html += `<span class="citation">${quote.citation}</span>`;
  }

  if (quote.year) {
    html += `<span class="year">${quote.year}</span>`;
  }

  html += "</p>";
  if (quote.tag) {
    print(
      "tag-box",
      `<p class="tags"><span class="tag">${quote.tag}</span></p>`
    );
  }
  print("quote-box", html);
  document.body.style.backgroundColor = rgbColorPicker();
}

/*
  Generates random number between and including 0 and 255
  code I wrote for refactor challenge here https://teamtreehouse.com/library/javascript-loops-arrays-and-objects/simplify-repetitive-tasks-with-loops/the-refactor-challenge-part-2
*/
function randomNumber256() {
  return Math.floor(Math.random() * 256);
}

/*
  creates a color to be used for css styling using rgb(255,255,255) as the value.
  code I wrote for refactor challenge here https://teamtreehouse.com/library/javascript-loops-arrays-and-objects/simplify-repetitive-tasks-with-loops/the-refactor-challenge-part-2
*/
function rgbColorPicker() {
  return `rgb(${randomNumber256()},${randomNumber256()},${randomNumber256()})`;
}
/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document
  .getElementById("loadQuote")
  .addEventListener("click", printQuote, false);
