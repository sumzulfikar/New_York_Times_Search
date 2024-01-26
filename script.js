var APIkey="qTw8EMKwPhaPhhIorMAdyy6Av9WgQ8EE";
var search="election";
var queryurl="https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+search+"&api-key="+APIkey;


fetch(queryurl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

console.log(data);



    });
    