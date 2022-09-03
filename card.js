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
       
       <div class="row g-3 p-2 text-black  bg-success p-2 text-dark bg-opacity-10">
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
            <p class="card-text "><small class="text-muted">${card.author.published_date}</small></p>
            </div>
            <div class="col">
               
            <i class="fa-solid fa-eye"></i>
              
              <h6 class = "card-view">${card.total_view}</h6>

            </div>
            <div class="col">
          
            <button onclick="loadNewsDetails('${card._id}')" href ="#" class="btn btn-primary"><i class="fa-solid fa-arrow-right"></i></button>
            
            </div>
          </div>
        </div>
              
               
               
        </div>
      </div>
        
        
        

        `;
        cardContainer.appendChild(cardDiv);
    })
}
const loadNewsDetails= async news_id=>{
   const url= `https://openapi.programming-hero.com/api/news/{news_id}`;
   const res = await fetch(url);
   const data = await res.json();
   console.log(data);
}

loadCard();
loadNewsCard();
