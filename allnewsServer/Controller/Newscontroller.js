import news from "../connection/modal/news.js";

export const getNews = async (request, response) => {
  try {
    let data = await news.find({});
    response.status(200).json(data);
  } catch (error) {
    response.status(500).json(error);
  }
};
