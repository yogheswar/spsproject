
    var button=document.querySelector("#btn");
    var bc=document.querySelector("#bookcontainer");
    button.addEventListener("click",function(){
        bc.remove();
    })
    console.log(window.innerHeight)
        var popupoverlay=document.getElementById("popupoverlay");
        var popup=document.querySelector("#popup");
        var popuptitle=document.querySelector("#title");
        var popupauthor=document.querySelector("#author");
        var popupdescription=document.querySelector("#description");
    var addBtn = document.getElementById("add");
     addBtn.addEventListener("click", function () {
    popupoverlay.style.display = "block";
    popup.style.display = "block";
    popuptitle.style.display = "block";
    popupauthor.style.display = "block";
    popupdescription.style.display = "block";
});

    var deletebtn=document.getElementById("deleting")
    deletebtn.addEventListener("click",function(event)
{
    event.preventDefault()
        popupoverlay.style.display="none";
        popup.style.display="none";
        popuptitle.style.display="none";
        popupauthor.style.display="none";
        popupdescription.style.display="none";
}) 

var container=document.querySelector("#container")
var addbook=document.querySelector("#addbook");
var booktitle=document.querySelector("#title");
var bookauthor=document.querySelector("#author");
var bookdescription=document.querySelector("#description");
addbook.addEventListener("click", function (event) {
    event.preventDefault();

    var div = document.createElement("div");
    div.setAttribute("id", "bookcontainer");

    div.innerHTML = `
        <h2>${booktitle.value}</h2>
        <h5>${bookauthor.value}</h5>
        <p>${bookdescription.value}</p>
        <button class="delete" style="background-color: #FD6569; border-radius: 10px; color: black; padding-top: 3px; padding-right: 5px; padding-left: 5px; padding-bottom: 3px; margin-top: 10px; border: none; cursor: pointer; margin-right:15px;transform: scale(1);box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2)transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), 
              transform 0.3s ease-in-out,
              opacity 0.4s ease,
              margin 0.3s ease;;">Delete</button>
    `;

    div.querySelector(".delete").addEventListener("click", function () {
        div.remove();
    });

    container.append(div);
   

    // Clear the form and hide popup
    booktitle.value = "";
    bookauthor.value = "";
    bookdescription.value = "";
    popupoverlay.style.display = "none";
    popup.style.display = "none";
});
