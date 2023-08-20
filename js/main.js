import { details } from "./details.js";
import { DisplayGames } from "./UI.js";

export class GetGames {
  constructor() {
    this.dis = new DisplayGames();
    this.getAPI();
    document.querySelectorAll(".nav-item a").forEach((link) => {
      link.addEventListener("click", () => {
        document.querySelector(".nav-item a.active").classList.remove("active");
        link.classList.add("active");
        this.getAPI(link.innerHTML);
      });
    });

    this.details = document.getElementById("details");
    this.maingames = document.getElementById("maingames");
  }

  async getAPI(category = "mmorpg") {
    document.getElementById("loading").classList.remove("d-none");

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "ba3faee346mshb0051a4e6423cbap127b50jsn55adad692821",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    const dataAPI = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
      options
    );
    let gamesData = await dataAPI.json();
    document.getElementById("loading").classList.add("d-none");

    this.dis.display(gamesData);

    document.querySelectorAll(".card").forEach((card) => {
      card.addEventListener("click", () => {
        this.maingames.classList.add("d-none");
        this.details.classList.remove("d-none");
        new details(card.dataset.id);
      });
    });
  }
}
