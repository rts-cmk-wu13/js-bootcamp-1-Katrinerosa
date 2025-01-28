
function generateQuote() {
    console.log("fghjhyyugfg");
    
let quotes = [
    "f you fell down yesterday, stand up today.",
    "In ancient times cats were worshipped as gods; they have not forgotten this.",
    "Anger is wonderful. It keeps you going. I'm angry about bankers. About the government.",
    "A king is always a king - and a woman always a woman: his authority and her sex ever stand between them and rational converse.",
    "If you obey all the rules you miss all the fun. -Katherine Hepburn",
    "The whole problem with the world is that fools and fanatics are always so certain of themselves, and wiser people so full of doubts.",
    "It is the mark of an educated mind to be able to entertain a thought without accepting it."
 ];

  let randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerHTML=quotes[randomNumber];
}
generateQuote()