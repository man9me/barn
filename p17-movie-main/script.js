const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0196fbeddf6601215bfd8a4cd7a62396&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=0196fbeddf6601215bfd8a4cd7a62396&query="';
const headers = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTk2ZmJlZGRmNjYwMTIxNWJmZDhhNGNkN2E2MjM5NiIsInN1YiI6IjYwN2YyZjNjOTU1YzY1MDAyYmQxMGZmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xkQK9xZKt3o7Mxcaf7zHxO8-ONw0RqrscKT9dQMajR0",
    "Content-Type": "application/json;charset=utf-8",
  },
};

const form = document.getElementById("form");
const search = document.getElementById("search");
const maon = document.getElementById("main");

getMovies(API_URL);

function postShark() {
  if (guraContainier) {
    guraContainier.remove();
  } else {
    var guraContainier = document.createElement("div");
    guraContainier.id = "guraContainier";
    guraContainier.innerText = "A";

    main.appendChild(guraContainier);
  }
}

function unpostShark() {
  var shark = document.getElementById("guraContainier");
  shark.remove();
}

async function getMovies(url) {
  postShark();
  const res = await fetch(url);
  const data = await res.json();
  console.log("result is ok=", res.ok);
  if (!res.ok) {
    postShark();
    // var text = document.createElement("p");
    // text.innerText = res.text;
  } else {
    postShark();
    console.log(data.results);
    showMovies(data.results);
  }
  // console.log(data.results);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(search.value);
  search.placeholder = search.value;
  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_API + searchTerm);

    search.value = "";
  } else {
    // перегрузить страницу
    window.location.reload();
  }
});

function showMovies(movies) {
  main.innerHTML = "";
  if (movies.length === 0) {
    postShark();
  } else {
    movies.forEach((data) => {
      const { title, poster_path, vote_average, overview } = data;
      // console.log(vote_average);
      const movieEl = document.createElement("div");

      movieEl.classList.add("movie");

      movieEl.innerHTML = `
    
  <img src='${IMG_PATH + poster_path}' alt="">
  <div class="movie-info">
    <h3>${title}</h3>
    <span class='${getClassByRate(vote_average)}'>${vote_average}</span>
  </div>
  <div class="overview"> 
    <h3>overview</h3>
    ${overview}
  </div>
 
`;
      main.appendChild(movieEl);
    });
  }
}

function getClassByRate(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}
