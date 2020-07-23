var movies_ar = [];

window.onload = () => {
  doRestApi();
};

const doRestApi = (_cat_id = 5) => {
  let myUrl = `https://api.themoviedb.org/3/list/${_cat_id}?api_key=d4bc3c640586e7f90dc68d8b300247ff&language=en-US`;

  fetch(myUrl)
    .then((response) => response.json())
    .then((data) => {
      movies_ar = data.items;
      console.log(data.items);
      renderAllMovies(movies_ar);
    });
};

const onChangeCat = (e) => {
  let cat_id = e.target.dataset.cat;
  doRestApi(cat_id);
};

const onCloseDarkWindow = () => {
  document.querySelector("#id_dark").className = "d-none";
};

const onSearchMovie = () => {
  let searchQ = document.querySelector("#id_search").value;
  let sortQ = document.querySelector("#id_sort").value;

  movies_ar.sort(compareValues(sortQ));

  let temp_ar = movies_ar.filter(
    (item) =>
      item.title.indexOf(searchQ) > -1 || item.overview.indexOf(searchQ) > -1
  );
  renderAllMovies(temp_ar);
};

const renderAllMovies = (data_ar) => {
  document.querySelector("main .row").innerHTML = "";

  data_ar.map((item) => {
    let {
      poster_path,
      title,
      release_date,
      vote_average,
      vote_count,
      overview,
      backdrop_path,
    } = item;

    let mov = new Movie(
      "main .row",
      poster_path,
      title,
      release_date,
      vote_average,
      vote_count,
      overview,
      backdrop_path
    );
    mov.renderToHtml();
  });
};

const compareValues = (key, order = "asc") => {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) return 0;
    const comparison = String(a[key]).localeCompare(String(b[key]));

    return order === "desc" ? comparison * -1 : comparison;
  };
};
