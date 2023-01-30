export interface Movie {
  id: number;
  poster_path: string;
  backdrop_path: string;
  title: string;
  average_rating: number;
  release_date: string;
}

export interface Movies {
  movies: Movie[];
  selectMovie: React.Dispatch<React.SetStateAction<object>>;
}
