const api_url = "https://api.quotable.io/random";
const quote = document.getElementById('quote');
const author = document.getElementById('author');
const newQuote = document.getElementById('new-quote');
const tweet = document.getElementById('tweet')

async function getQuote(url){
    const response = await fetch(url)
    var data = await response.json()
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

getQuote(api_url);
newQuote.addEventListener('click', () => getQuote(api_url));

tweet.addEventListener('click', () =>{
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + " By " + author.innerHTML, "Tweet Window", "width = 600, height = 300")
})


