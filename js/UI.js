
export class DisplayGames {
  
  display(gamesData) {
    let box = ``;
    for (let i = 0; i < gamesData.length; i++) {
      box += `
<div class="col">
<div class="card bg-transparent h-100" data-id="${gamesData[i].id}">
  <div class="card-body pb-0">
    <div class="card-img">
      <img src="${gamesData[i].thumbnail} " alt="" class="w-100" />
    </div>
    <figcaption class="text-white">
      <div
        class="container-free my-1 d-flex justify-content-between align-items-baseline"
      >
        <h4>${gamesData[i].title}</h4>
        <span class="free px-2 py-1 rounded-2">free</span>
      </div>
      <p class="text-center py-1">
       ${gamesData[i].short_description}
      </p>
    </figcaption>
  </div>
  <footer
    class="card-footer px-3 d-flex justify-content-between text-white"
  >
    <span class="cafooter p-1 rounded-2">${gamesData[i].genre}</span
    ><span class="cafooter p-1 rounded-2">${gamesData[i].platform}</span>
  </footer>
</div>
</div>
`;
    }
    document.getElementById("games").innerHTML = box;
  }
  displayDetails(data) {
    const box = ` 
<div class="col-md-4">
<img src="${data.thumbnail}" alt="" class="w-100" />
</div>
<div class="col-8 text-white">
<h3 class="title mb-3" >Title:${data.title}</h3>
<p>
  Category: <span class="p-1 rounded-2 text-black">${data.genre}</span>
</p>
<p>
  Platform: <span class="p-1 rounded-2 text-black">${data.platform}</span>
</p>
<p>Status: <span class="p-1 rounded-2 text-black">${data.status}</span></p>
<p>
  ${data.short_description}
</p>
<a class="btn btn-outline-warning text-white" href="${data.game_url}">Show Game</a>
</div>
`;
    document.getElementById("gamesDetails").innerHTML = box;
  }
}


