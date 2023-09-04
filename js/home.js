import { details } from "./details.js";
import { ui } from "./ui.js";

export class Home{
  constructor(){
  document.querySelectorAll(".nav-link").forEach((link)=>{
    link.addEventListener("click" ,()=>{
      this.changedata(link);
      const category = link.dataset.category;
      this.getGames(category)
    
      
    })
  })
  this.datailssection = new details(); 
  this.loading = document.querySelector('.loading'); 
  this.ui = new ui();
  this.getGames('mmorpg')
  }
  changedata(link){
    document.querySelector('.navbar-nav .active').classList.remove("active");
    link.classList.add("active")
  }
async getGames(cat){
  this.loading.classList.remove('d-none');
  this.datails = document.querySelector('.details'); 
  this.games = document.querySelector('.games');
  
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b20862612bmshe16d12f3fe7ff6bp186737jsnb2926d287734',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
  const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}` , options);
  const respose =await api.json();
  this.loading.classList.add('d-none');
  this.ui.displayAllprodect(respose);
  document.querySelectorAll('.card').forEach((card)=>{
    card.addEventListener('click' , ()=>{
      this.datails.classList.remove('d-none');
      this.games.classList.add('d-none');
      new details(card.dataset.id)
    })
  })
  }
}