
const card = document.getElementById("cardSection");
const input = document.getElementById("userInput");
  

let getData = () => {
  fetch(`https://newsapi.org/v2/everything?q=${input.value}&from=2024-11-10&sortBy=publishedAt&apiKey=2cb44375527540be99a48a60f26a2224`)
    .then((result) => result.json())
    .then((data) => {
      data.articles.map((article, i) => {
        card.innerHTML += `<div id='card' class="card" style="width: 18rem;">
            <img src=${article.urlToImage} class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${article.title}</h5>
            <small class="card-text"><i>Published on: ${article.publishedAt.slice(0,4)}/${article.publishedAt.slice(5,7)}/${article.publishedAt.slice(8,10)}<i></small>
            <p class='card-text'><i>author: ${article.author}</i></p>
            <p class="card-text">${article.description}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            
            </div>
            </div>`;
      });
    })
    .catch((err) => {
      console.log(err);
    });
};











// const button=document.getElementById('search-button');
// const userInput=document.getElementById('city-userInput');
// const card=document.getElementById('cardSection');




// button.addEventListener('click', async ()=>{
//     const value=userInput.value;
//     const result= await getData(value);
//     const data=result.articles;
//     console.log(result);
//     console.log(data);

//     data.forEach((article, index) => {
//         Object.keys(article).forEach(key => {
//         //   document.write(`  ${key}: ${article[key]}<br>`);
//     card.innerHTML=`<div class="card" style="width: 18rem;">
//   <img src="${article.urlToImage}" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${article.title}</h5>
//     <p><strong>Published At:</strong> ${new Date(article.publishedAt).toLocaleDateString()}</p>
//     <p><strong>Description:</strong> ${article.description}</p>
//     <a href="${article.url}" target="_blank">Read more</a>
//   </div>
// </div>`
    

//         });
//     });
// });
