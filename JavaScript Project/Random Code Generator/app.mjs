
const quotes= ['sadasdasdasdasd',"dasdasdasfaqdv",'sdasdasdadasdasd','asdasdasdasdasd',];
               


const usedIndex = new Set();

document.getElementById("checkBtn").addEventListener("click", check);



function check() {

    while (true) {
    const quoteElement = document.getElementById("quote");

    const randomIndex = Math.floor(Math.random() * quotes.length);

    if (usedIndex.has(randomIndex)) continue;

    const quote = quotes[randomIndex];

    quoteElement.innerHTML = quote;

    usedIndex.add(randomIndex);

    break;
};


};


