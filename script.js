










const apiKey = 'ab7b260ba4647c6732382bf9f9fb8dd9';
const input = document.getElementById('input');
const movieArea = document.querySelector('.movies')

function search(){
  movieArea.innerHTML = ''
  const query = input.value;
  
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`)
    .then(response => response.json())
    .then(data => {

      data.results.forEach(movie => {
        let movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');

        let poster = document.createElement('img');
        poster.classList.add('poster');
        poster.setAttribute('src', `https://image.tmdb.org/t/p/original${movie.poster_path}`)

        let details = document.createElement('div');
        details.classList.add('details');

        let title = document.createElement('h2');
        title.classList.add('title');
        title.innerText = movie.title;

        let date = document.createElement('p');
        date.classList.add('date');
        date.innerHTML = `Release date : <span>${movie.release_date}</span>`;

        let description = document.createElement('p');
        description.classList.add('description');
        description.innerText = movie.overview;

        details.appendChild(title)
        details.appendChild(date)
        details.appendChild(description)

        movieDiv.appendChild(poster);
        movieDiv.appendChild(details);

        movieArea.appendChild(movieDiv)
        

        
        
      });
    })

  input.value = ''
}

