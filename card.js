const loadCard = async() =>{
    const url = `https://openapi.programming-hero.com/api/news/category/01`
    const res = await fetch(url);
    const data = await res.json();
    displayCard (data.data);
}

const displayCard = cards=>
{
    console.log(cards)
}
loadCard();