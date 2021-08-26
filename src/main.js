fetch('https://api.themoviedb.org/3/search/movie?api_key=732544339751a8291cc05e685efec0e9&query=Spider+Man')
  .then((response) => response.json())
  .then((data) => console.log(data))

const searchButton = document.querySelector('[data-js="search-button"]');
const searchInput = document.querySelector('[data-js="search-input"]');
const cardsContainer = document.querySelector('.cards-container');

const mainCardTitle = document.querySelector('.main-card-title');
const mainCardPoster = document.querySelector('[data-js="main-card-poster"]');
const mainCardSynopsis = document.querySelector('[data-js="main-card-synopsis"]');

const leftCardPoster = document.querySelector('[data-js="left-card-poster"]');
const leftCardTitle = document.querySelector('[data-js="left-card-title"]');

const rightCardPoster = document.querySelector('[data-js="right-card-poster"]');
const rightCardTitle = document.querySelector('[data-js="right-card-title"]');

searchButton.addEventListener('click', function() {
    cardsContainer.classList.remove('hidden');
    searchButton.href = "#screen2";

    if (searchInput.value.length > 0) {
      getData(searchInput.value)
    }

    searchInput.value = '';
})

function getData(movieName) {
  const movie = movieName.split(' ').join('+');

  console.log(movie);

  fetch(`https://api.themoviedb.org/3/search/movie?api_key=732544339751a8291cc05e685efec0e9&query=${movie}`)
    .then((response) => response.json())
    .then((data) => {
      const {original_title: titleMain, overview: synopsisMain, vote_avarage: voteAvarageMain , poster_path: poster_path_main} = data.results[0];

      mainCardSynopsis.textContent = synopsisMain;
      mainCardPoster.src = `https://image.tmdb.org/t/p/w500/${poster_path_main}`;
      mainCardTitle.textContent = titleMain;

      const {original_title: titleLeft, overview: synopsisLeft, vote_avarage: voteAvarageLeft, poster_path: poster_path_left} = data.results[1];

      leftCardPoster.src = `https://image.tmdb.org/t/p/w500/${poster_path_left}`;
      leftCardTitle.textContent = titleLeft;

      const {original_title: titleRight, overview: synopsisRight, vote_avarage: voteAvarageRight, poster_path: poster_path_right} = data.results[2];

      rightCardPoster.src = `https://image.tmdb.org/t/p/w500/${poster_path_right}`;
      rightCardTitle.textContent = titleRight;
    })
}