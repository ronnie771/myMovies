class Movie {
  constructor(_parent, _img, _name, _date, _score, _views, _info, _back) {
    this.parent = _parent;
    this.img = _img;
    this.name = _name;
    this.date = _date;
    this.score = _score;
    this.views = _views;
    this.info = _info;
    this.back = _back;
  }

  renderToHtml() {
    let boxDiv = document.createElement("div");
    boxDiv.className = "col-lg-6 border";
    document.querySelector(this.parent).appendChild(boxDiv);

    boxDiv.innerHTML += `
    <img src="https://image.tmdb.org/t/p/w500${this.img}" class="w-25 float-left mr-2">
    <h3>${this.name}</h3>
    <div>Date: ${this.date}</div>
    <div>Score: ${this.score}</div>
    `;
    let newBtn = document.createElement("button");
    newBtn.className = "btn btn-primary";
    newBtn.innerHTML = "More info";
    boxDiv.appendChild(newBtn);

    newBtn.addEventListener("click", () => {
      // alert(this.views);
      this.showMovieInfo();
    });
  }

  showMovieInfo() {
    document.querySelector("#id_dark").className =
      "dark container-fluid center";

    document.querySelector("#id_dark img").src =
      "https://image.tmdb.org/t/p/w500" + this.back;

    document.querySelector("#id_dark h2").innerHTML = this.name;
    document.querySelector("#id_dark .views").innerHTML =
      "Views: " + this.views;
    document.querySelector("#id_dark p").innerHTML = this.info;
  }
}
