$( "#startDate" ).datepicker();
$( "#endDate" ).datepicker();



$("#submit").on("click",searchArticles);


function searchArticles(event){
  var termSearch=$("#termSearch").val().trim();
      console.log(termSearch);
  var APIkey="qTw8EMKwPhaPhhIorMAdyy6Av9WgQ8EE";
  var queryurl="https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+termSearch+"&api-key="+APIkey;


  event.preventDefault();
fetch(queryurl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
          

    console.log(data);



    });
  }