const loadCard = async() =>{
    const url = `https://openapi.programming-hero.com/api/news/category/01`
    const res = await fetch(url);
    const data = await res.json();
    displayCard (data.data);
}

const displayCard = cards=>
{
    const cardContainer = document.getElementById('card-container');
    cards.forEach(card =>{
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('row');
        cardDiv.innerHTML = `
       <div class ="card ">
       <img src="..." class="card-img-top" alt="...">
       <div class = "card-body>
        <h5 class ="card-title">Card Title</h5>
        <p class = "card-text">This is card text</p>
        
        </div>
        <div>

        `;
        cardContainer.appendChild(cardDiv);
    })
}
loadCard();