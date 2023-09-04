export class ui {
  constructor() {}
  displayAllprodect(data) {
    let gameBox = "";
    for (var i = 0; i < data.length; i++) {
      gameBox += `  <div class="col-lg-3 col-md-4 col-sm-12">
      <div data-id="${data[i].id}" class="card h-100  bg-transparent" role="button">
        <div class="card-body">
          <figure class="position-relative">
            <img src="${data[i].thumbnail}" class="card-img-top object-fit-cover h-100" alt="photo">
          </figure>
          <figcaption>
            <div class="hstack justify-content-between">
              <h3 class="small h6">${data[i].title}</h3>
              <span class="badge text-bg-primary p-2">Free</span>
            </div>
            <p class="card-text small text-center opacity-50">${data[i].short_description}</p>
          </figcaption>
        </div>
        <footer class="card-footer small hstack justify-content-between">
          <span class="badge badge-color">${data[i].genre}</span>
          <span class="badge badge-color">${data[i].platform}</span>
        </footer>
  
      </div>
  
    </div>
      
      `;
    }
    document.querySelector("#gameData").innerHTML = gameBox;
  }
  displaydatails(data) {
  let cartone = `<div class="col-md-4">
    <img src="${data.thumbnail}" class="w-100" alt="Image-datails">
  </div>
  <div class="col-md-8">
    <h3>Title:${data.title}</h3>
    <p>category: <span class="badge text-bg-info">${data.genre}</span></p>
    <p>platform: <span class="badge text-bg-info">${data.platform}</span></p>
    <p>status: <span class="badge text-bg-info">${data.status}</span></p>
    <p class="small">${data.description}</p>
    <a href="${data.game_url}" class="btn btn-outline-warning" target="_blank">Show Game</a>

  </div>
    `
    document.getElementById('detailsContent').innerHTML = cartone;
  }
}
