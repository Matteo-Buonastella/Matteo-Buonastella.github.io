////////////////////////////////ATALANTA////////////////////////////////////////

function Atalanta3(){
    document.getElementById("display3").style.display = "block";
    var article = document.getElementById("choose3")
    var title = "";
    title += "<p>" + "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus" + "</p>" 
    + "<button class='btn btn-danger' + onclick = 'ShowLess();'>" + "Show Less" + "</button>";

    article.innerHTML = title;
}

function Atalanta2(){
    document.getElementById("display2").style.display = "block";
    var article = document.getElementById("choose2")
    var title = "";
    title += "<p>" + "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus" + "</p>"
    + "<button class='btn btn-danger' + onclick = 'ShowLess();'>" + "Show Less" + "</button>";

    article.innerHTML = title;
}

function Atalanta1(){
    document.getElementById("display1").style.display = "block";
    var article = document.getElementById("choose1")
    var title = "";
    title += "<p>" + "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus" + "</p>"
    + "<button class='btn btn-danger' + onclick = 'ShowLess();'>" + "Show Less" + "</button>";

    article.innerHTML = title;
}



//////Show Less Function which is used in every article for every team//////
function ShowLess(){
    var elements = document.getElementsByClassName("display");     ///Will close all articles that are open and is used for every team
    for (var i = 0; i < elements.length; i++){
        document.getElementsByClassName("display")[i].style.display = "none";
    }
}
