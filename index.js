const quotes = [
  "Be yourself; everyone else is already taken. – Oscar Wilde",
  "Two things are infinite: the universe and human stupidity. – Albert Einstein",
  "So many books, so little time. – Frank Zappa",
  "A room without books is like a body without a soul. – Cicero",
  "In three words I can sum up everything I've learned about life: it goes on. – Robert Frost",
  "Always forgive your enemies; nothing annoys them so much. – Oscar Wilde",
  "Live as if you were to die tomorrow. Learn as if you were to live forever. – Mahatma Gandhi",
  "We accept the love we think we deserve. – Stephen Chbosky",
  "Without music, life would be a mistake. – Friedrich Nietzsche",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. – Emerson"
];

let lastIndex = -1;

function showRandomQuote() {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (randomIndex === lastIndex);  
  lastIndex = randomIndex;

  document.getElementById("quote").innerText = quotes[randomIndex];
}
