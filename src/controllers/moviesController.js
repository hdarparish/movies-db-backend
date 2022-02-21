import Title from "../models/titleModel.js";

const getTopMovies = async (request, response, next) => {
  try {
    const page = parseInt(request.query.page) || 0;
    const titles = await Title.find()
      .sort({ votes: -1 })
      .skip(page) //skips 20 movies
      .limit(20); //limits the results to 20 movies

    response.status(200).send(titles);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const getCategoryMovies = async (request, response, next) => {
  try {
    const category = request.query.category;
    const page = parseInt(request.query.page) || 0;
    const titles = await Title.find({ genre: category })
      .sort({ votes: -1 })
      .skip(page) //skips 20 movies
      .limit(20); //limits the results to 20 movies

    response.status(200).send(titles);
  } catch (error) {
    console.error(error);
    next(error);
  }
};
const getMovieDetail = async (request, response, next) => {
  try {
    const movieID = request.params.id;
    const title = await Title.find({ _id: movieID });
    return response.status(200).send(title[0]);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const getSearchQuery = async (request, response, next) => {
  try {
    const query = request.query.query;
    const page = parseInt(request.query.page) || 0;
    const titles = await Title.find({ title: { $regex: query, $options: "i" } })
      .sort({ votes: -1 })
      .skip(page) //skips 20 movies
      .limit(20); //limits the results to 20 movies

    response.status(200).send(titles);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export { getTopMovies, getCategoryMovies, getMovieDetail, getSearchQuery };
