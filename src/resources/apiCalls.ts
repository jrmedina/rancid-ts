export const getMovies = () => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies`).then(
    (response) => {
      return response.json();
    }
  );
};

export const getMovie = (id: string) => {
  return fetch(
    `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`
  ).then((response) => {
    return response.json();
  });
}
