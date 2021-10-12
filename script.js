// //SVG background url:  https://www.heropatterns.com/
// //API Url: https://type.fit/api/quotes
// //Work with local API Using Local array   
//   const newQuote = () => {
//   //pick a random quote from apiQuotes array
//       const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
//       console.log(quote);
// }
// newQuote();




///////////////////////////////////////////

//Using API For Quote
//DOM 
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");


let apiQuotes = [];


//show loading
const loading = () => {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

//Hide loading
const complete = () => {
   loader.hidden = true;
   quoteContainer.hidden = false;
};

const newQuote = () => {
    loading();
  //pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    //Check if Author field is blank and replace it with 'Unknown'
    if (!quote.author) {
        authorText.textContent = 'Unknown';
    } else {
         authorText.textContent = quote.author;
    }

    //check quote length to determine styling
    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    
    //set quote, hide loader
    quoteText.textContent = quote.text;
    complete();
}


//get Quote from API
const getQuote = async () => {
  const apiUrl = 'https://type.fit/api/quotes';
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  }
  catch(error) {
    
  }
}

//Tweet Quote
const tweetQuote = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteText.textContent}`;
    window.open(twitterUrl, '_blank');

}

//event listener
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

//on load
getQuote();


// ////////////////////////////////////////




// //work with rest API
// //Rest API link: https://forismatic.com/en/api/

// //DOM 
// const quoteContainer = document.getElementById('quote-container');
// const quoteText = document.getElementById('quote');
// const authorText = document.getElementById("author");
// const twitterBtn = document.getElementById("twitter");
// const newQuoteBtn = document.getElementById("new-quote");
// const loader = document.getElementById("loader");

// //show loading
// const loading = () => {
//     loader.hidden = false;
//     quoteContainer.hidden = true;
// }

// //Hide loading
// const complete = () => {
//     if (!loader.hidden) {
//            loader.hidden = true;
//            quoteContainer.hidden = false;
//     }
// };


// //get Quote from API
// const getQuote = async () => {
//     loading();
//     const proxyUrl = 'https://whispering-tor-04671.herokuapp.com/';
//   const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
//   try {
//     const response = await fetch(proxyUrl + apiUrl);
//       const data = await response.json();
//       //if Author is blank, add 'unknown'
//       if (data.quoteAuther === '') {
//           authorText.innerText = 'Unknown';
//       } else {
//                 authorText.innerText = data.quoteAuthor;
//       }
//       //Reduce font size for lonh quote
//       if (data.quoteText.length > 120) {
//           quoteText.classList.add('long-quote');
//       } else {
//           quoteText.classList.remove('long-quote');
//       }

//       quoteText.innerText = data.quoteText;
//       //stop loader, show quote
//       complete();
//   }
//   catch (error) {
//       getQuote();
//     // console.log("whoops, no quote", error);
//   }
// }


// const tweetQuote = () => {
//     const quote = quoteText.innerText;
//     const author = authorText.innerText;
//     const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
//     window.open(witterUrl, '_blank')
// }

// //event listenals
// newQuoteBtn.addEventListener('click', getQuote);
// twitterBtn.addEventListener("click", tweetQuote);

// //on load
// getQuote();
