var content2 = document.getElementById("content2");
var button2 = document.getElementById("show-more2");

button2.onclick = function()
{
    if(content2.className == "open")
    {    //shrink box
        content2.className = "";
        button2.innerHTML = "Show More";
    }
    else
    {    //expand box
        content2.className = "open";
        button2.innerHTML = "Show Less";
    }
};

