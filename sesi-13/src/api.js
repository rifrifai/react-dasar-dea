import axios from "axios";

export const getMovieList = async () => {
  const movie = await axios.get("");
  return;
};

export const searchMovie = async (e) => {
  const search = await axios.get(e);
  return;
};
