var quotes = ["You miss 100% of the shots you don't take. - Wayne Gretzky",
    "When you want something, the whole universe conspires in order for you to achieve it. - The Alchemist by Paulo Coelho",
    "Happiness can be found even in the darkest of times, if one only remembers to turn on the light. - Albus Dumbledore",
    "Fathers have a way of lifting you up and giving you the courage to do things that you never thought you could...",
    "It is only with the heart that one can see rightly; what is essential is invisible to the eye. - The Little Prince by Antoine de Saint-Exupery",
    "We accept the love we think we deserve. - The Perks of Being a Wallflower by Stephen Chbosky",
    "It's the possibility of having a dream come true that makes life interesting. - The Alchemist by Paulo Coelho",
    "Not all those who wander are lost - The Fellowship of the Ring by J.R.R. Tolkein",
    "The quieter you become, the more you can hear. - Gautam Buddha",
    "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. - Gautam Buddha",
    "Every morning we are born again. What we do today is what matters most. - Gautam Buddha",
    "Nothing is permanent. - Gautam Buddha",
    "No one saves us but ourselves. No one can and no one may. We ourselves must walk the path. - Gautam Buddha",
    "Peace comes from within. Do not seek it without. - Gautam Buddha",
    "Your purpose in life is to find your purpose and give your whole heart and soul to it - Gautam Buddha",
    "Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship. - Gautam Buddha"
];

var quote = document.getElementById('quote');
var button = document.getElementById('button');

function generateQuote(){
    var random = Math.floor(Math.random()* quotes.length);

    var randomQuote = quotes[random];
    quote.textContent = randomQuote;
}

button.addEventListener('click', generateQuote);