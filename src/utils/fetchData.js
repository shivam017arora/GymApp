import axios from "axios";

export const youtubeOptions = {
  method: "GET",
  url: "https://youtube-search-and-download.p.rapidapi.com/search",
  headers: {
    "X-RapidAPI-Key": "0f0abbea19mshb9043d62ee5e7c3p143ee1jsn0570e756588a",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchYoutubeVideos = async (youtubeOptions) => {
  axios
    .request(youtubeOptions)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0f0abbea19mshb9043d62ee5e7c3p143ee1jsn0570e756588a",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const propietaryFetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
