const loadNews = () =>
{
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data =>displayNews(data.data.news_category))
}


const displayNews= (categories)=>{
    const categoriesContainer  = document.getElementById('all-menu');
    
    categories.forEach(category => {
        console.log(category)
        console.log(category.category_name)

    
        const newli = document.createElement('li')
        newli.innerHTML = `
        <button> 
              ${category.category_name}
              
        </button>
        
        `;
        categoriesContainer.appendChild(newli);

    })
        
    
}
loadNews();










