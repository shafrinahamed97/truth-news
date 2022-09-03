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
      <img src="${card.image_url}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8 ">
        <div class="card-body">
          <h5 class="card-title">${card.title}</h5>
          <p class="card-text">${card.details}</p>
          <div>
          
          <div class="container text-center">
          <div class="row">
            <div class="col">
            <h5 class ="card-writer">${card.author.name}</h5>
            </div>
            <div class="col">
              
          <h6 class = "card-view">${card.total_view}</h6>
            </div>
            <div class="col">
            <p class="card-text"><small class="text-muted">${card.author.published_date}</small></p>
            </div>
          </div>
        </div>
              
               
               
        </div>
      </div>
        
        
        

        `;
        cardContainer.appendChild(cardDiv);
    })
}
loadCard();
/*
 <h5 class ="card-writer">${card.author.name}</h5>
               
               
          
          
          
          <h6 class = "card-view">${card.total_view}</h6>
          
          <
               <p class="card-text"><small class="text-muted">${card.author.published_date}</small></p>

*/