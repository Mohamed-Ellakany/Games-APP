import { DisplayGames } from "./UI.js";

export class details {
  constructor(id) {
    document.getElementById("btnClose").addEventListener("click", () => {
      document.getElementById("maingames").classList.remove("d-none");
      document.getElementById("details").classList.add("d-none");
    });
    this.getDetails(id);
  }
  async getDetails(id) {
    document.getElementById("loading").classList.remove("d-none");
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "ba3faee346mshb0051a4e6423cbap127b50jsn55adad692821",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    const Api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}
      `,
      options
    );

    const ApiResponse = await Api.json();
    document.getElementById("loading").classList.add("d-none");

    new DisplayGames().displayDetails(ApiResponse);
  }
}
