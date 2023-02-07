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
  find: any;
  filter: any;
}

export interface AllMovies {
  movies: any;
  selectMovie: React.Dispatch<React.SetStateAction<any>>;
}

export interface MiniCardProps {
  title: string;
  id: string;
  image: string;
  selectMovie: React.Dispatch<React.SetStateAction<object>>;
}
export interface MovieDetails {
  id: number;
  poster_path: string;
  backdrop_path: string;
  title: string;
  average_rating: number;
  release_date: string;
  budget: number;
  genres: string[];
  revenue: number;
  tagline: string;
  overview: string;
  runtime: number;
}

export interface MovieCardProps {
  movie: {
    id: number;
    poster_path: string;
    backdrop_path: string;
    title: string;
    average_rating: number;
    release_date: string;
    budget: number;
    genres: string[];
    revenue: number;
    tagline: string;
    overview: string;
    runtime: number;
  };
}
