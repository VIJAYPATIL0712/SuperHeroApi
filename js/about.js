
var resultId = localStorage.getItem('id');

fetch();

function fetch(){
    var Request = new XMLHttpRequest();
    // By Using Result Id, I will fetch agian with API 
    var url = `https://gateway.marvel.com/v1/public/characters/${resultId}?apikey=c2595c6e10b8e75e6bd3b3c61b14547c&hash=77964d9b5c2bef6213992685d7c2dfd4&ts=1`;
    Request.open('get',url,true);
    Request.send();
    Request.onload = function(){
        var response = JSON.parse(Request.response);
        // Print all the Resoponses in the formate of JSON
        // console.log(response.data);
        // According to all Id's i will get elemets and change its inner HTML by the Responses
            document.getElementById("name").innerHTML = response.data.results[0].name;
            document.getElementById("id").innerHTML = response.data.results[0].id ;
            document.getElementById("desc").innerHTML = response.data.results[0].description ;
            document.getElementById("comic").innerHTML = response.data.results[0].comics.available ;
            document.getElementById("series").innerHTML = response.data.results[0].series.available ;
            document.getElementById("stories").innerHTML = response.data.results[0].stories.available ;
            document.getElementById("count").innerHTML =  response.data.count ;
            document.getElementById("modified").innerHTML = response.data.results[0].modified;
            document.getElementById("status").innerHTML = response.status;
            document.getElementById("total").innerHTML =  response.data.total;
            document.getElementById("limit").innerHTML = response.data.limit;
            document.getElementById("offset").innerHTML =response.data.offset;
            document.getElementById("code").innerHTML =  response.code;
            
    }
}