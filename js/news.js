var content = document.getElementById("content");
var button = document.getElementById("show-more");

button.onclick = function()
{
    if(content.className == "open")
    {    //shrink box
        content.className = "";
        button.innerHTML = "Show More";
    }
    else
    {    //expand box
        content.className = "open";
        button.innerHTML = "Show Less";
    }
};





/*var article = [
    {team: "Torino", image:"News_Images/Joe_Hart_Torino.jpg", title: "Is Joe Hart right for Torino?", date:"04/21/17", alt:"Torino",
     paragraph:
    "Is Joe Hart the man that can lead Torino to Europe, or is he a bust in terms of his credentials<!--more-->... blah blah blah"}
];



window.onload = function()
{
    var newsContainer = document.querySelector("#News");
    var News = "";

    for(var i = 0; i<article.length; i++)
    {
        News += "<h3>" + article[i].title + "</h3>" +
            "<img alt='" + article[i].alt +"'" +
            "src='" + article[i].image + "'/>"+
            "<p>" + article[i].paragraph + "</p>";
    }
    newsContainer.innerHTML = News;
};
*/
window.onload = function(){
var url = new URL(window.location.href);
var param = url.searchParams.get("scroll");

if (param == "yes")
   window.scrollBy(0, 650);
}