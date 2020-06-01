// Get the modal
var modal = document.getElementById("myModal");
var modalcont = document.getElementsByClassName("modal-content")[0];

// Get the buttons that opens the modal
var card1 = document.getElementsByClassName("item-a")[0];
var card2 = document.getElementsByClassName("item-b")[0];
var card3 = document.getElementsByClassName("item-c")[0];

var ifr = document.getElementById("iframec");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var max = document.getElementsByClassName("maximize")[0];

console.log(max);

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

max.onclick = function() {
    if(modalcont.classList.contains("modal-content")) {
        modalcont.classList.remove("modal-content");
        modalcont.classList.add("maximized");
    } else if(modalcont.classList.contains("maximized")) {
        modalcont.classList.remove("maximized");
        modalcont.classList.add("modal-content");
    }
    
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

card1.onclick = function() {
    if(modalcont.classList.contains("maximized")) {
        modalcont.classList.remove("maximized");
        modalcont.classList.add("modal-content");
    }
    ifr.setAttribute("src", "https://rocketseat.com.br/starter");
    modal.style.display = "block";
}

card2.onclick = function() {
    if(modalcont.classList.contains("maximized")) {
        modalcont.classList.remove("maximized");
        modalcont.classList.add("modal-content");
    }
    ifr.setAttribute("src", "https://rocketseat.com.br/launchbase");
    modal.style.display = "block";
}

card3.onclick = function() {
    if(modalcont.classList.contains("maximized")) {
        modalcont.classList.remove("maximized");
        modalcont.classList.add("modal-content");
    }
    ifr.setAttribute("src", "https://rocketseat.com.br/gostack");
    modal.style.display = "block";
}