import $ from 'jquery';

export function getData() {
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.themoviedb.org/3/discover/movie?year=2015&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=a1cd50ef41a15f6bac67b30a5e051655",
    "method": "GET",
    "headers": {},
    "data": "{}"
  }

  return $.ajax(settings).then( response => {
    // console.log("response: " + response)
    return response.results.map(
      (movie => {
        const temp = {};
        temp.title = movie.title;
        temp.overview = movie.overview;
        temp.poster_path = movie.poster_path;
        return temp })
    );
  })
};
