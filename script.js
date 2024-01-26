var startdate=$( "#startDate" ).datepicker().val();
var enddate=$( "#endDate" ).datepicker().val();

var articleResults=$("#articleResults");
//When sumbit is clicked use the parameters to retun NY Times api results
$("#submit").on("click",searchArticles);
$("#clear").on("click",clear);


function searchArticles(event){
  var termSearch=$("#termSearch").val().trim();
  
  
      console.log(termSearch);
  var APIkey="qTw8EMKwPhaPhhIorMAdyy6Av9WgQ8EE";
  var resultLength=parseInt($("#numofResults option:selected").text());
  console.log(resultLength);
  var queryurl="https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+termSearch+resultLength+startdate+enddate+"&api-key="+APIkey;


  event.preventDefault();
fetch(queryurl)
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      console.log(data);
     

      for (var i = 0; i < resultLength; i++) {
      
      var consolidatedResponse=data.response.docs[i];
      var headline=consolidatedResponse.headline.main;
      console.log(headline); 
      var abstract=consolidatedResponse.abstract;
      console.log(abstract);
      var publicationDate=consolidatedResponse.pub_date;
      console.log(publicationDate);
      var reportedby=consolidatedResponse.byline.original;
      console.log(reportedby);
      var referenceurl=consolidatedResponse.web_url;
      console.log(referenceurl);

      var row=$("<div>").attr("class","row");
      var h3=$("<h3>").attr("id","headline"+[i]);
      h3.text(headline);
      var h4=$("<h4>").attr("id","reportedby"+[i]);
      var p=$("<p>").attr("id","abstract"+[i]);
      h4.text(abstract);
      var h5=$("<h5>").attr("id","pubdate"+[i]);
      h5.text(publicationDate)
      var a=$("<a>").attr("id","url"+[i]);
      a.text(referenceurl);
      
      $("#article-section").append(row.append(h3).append(h4).append(p).append(h5).append(a)).append($("<hr>"));  
      
      }
    
      
     
    });
  }
  function clear(event){
    event.preventDefault();
    $("#article-section").empty();
  }