const api='https://api.quotable.io/random'
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("btn");


function generate() 
{ 
    fetch(api)
    
        .then((res) => res.json())
        .then((data) => {
            quote.innerHTML = `"${data.content}"`;
            author.innerHTML = `- ${data.author}`;
        })
            

}