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
       
       <div class="row g-0">
       <div class="col-md-4">
      <img src="${card.img}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${card.title}</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <h5 class ="card-writer">${card.author.name}</h5>
          <h6 class = "card-view">${card.total_view}</h6>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
        
        
        

        `;
        cardContainer.appendChild(cardDiv);
    })
}
loadCard();