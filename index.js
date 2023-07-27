// quotes

const quotes = ["Only I Can Call My Dream Stupid! - Roronoa Zoro",
"People’s Dreams... Have No Ends! - Marshall D. Teach",
"Justice Will Prevail, You Say? But Of Course, It Will! Whoever Wins This War Becomes Justice! - Donquixote Doflamingo",
"You Want To Keep Everyone From Dying? That’s Naive. It’s War — People Die",
"His Power Is To Rally Those Around Him. Of All The People Seeking To Conquer The Sea, He May Possess The Greatest Talent Of All. - Dracule Mihawk"
]

// function to show random quotes 

function randomOnePiceQuote () {
    let randomNumber = Math.floor(Math.random() * (quotes.length));
    console.log(quotes[randomNumber]);
}

randomOnePieceQuote();