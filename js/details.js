import { ui } from "./ui.js";

export class details{
  constructor(id){
    document.getElementById("btnClose").addEventListener('click',function(){
      document.getElementById('details').classList.add('d-none');
      document.getElementById('games').classList.remove('d-none');
    })
  this.loading = document.querySelector('.loading'); 
  this.getdatails(id)
  }
async getdatails(id){
  this.loading.classList.remove('d-none');
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b20862612bmshe16d12f3fe7ff6bp186737jsnb2926d287734',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
  const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
  const respones = await api.json();
  this.loading.classList.add("d-none")
  console.log(respones);
  new ui().displaydatails(respones)

  }
}   