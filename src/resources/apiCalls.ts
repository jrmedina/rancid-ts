export const apiCall = () => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies`).then(
    (response) => {
      return response.json();
    }
  );
};

