// Get the modal
var modal = document.getElementById("aboutModal");
var modal2 = document.getElementById("menuModal");
var modal3 = document.getElementById("contactModal");



// Get the button that opens the modal
var btn = document.getElementById("aboutButton");
var btn2 = document.getElementById("menuButton");
var btn3 = document.getElementById("contactButton");

// Get the <span> element that closes the modal
var span= document.getElementsByClassName("close")[0];
var span2= document.getElementsByClassName("close")[1];
var span3= document.getElementsByClassName("close")[2];


// When the user clicks on the button, open the modal 
btn.onclick = function() /*when the button gets clicked, display the menu*/ {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

btn2.onclick = function() /*when the button gets clicked, display the menu*/ {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}

btn3.onclick = function() /*when the button gets clicked, display the menu*/ {
  modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
  modal3.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) /*if user clicks outside model */{
    modal.style.display = "none"; /*modal gets closed */
  }
  else if (event.target == modal2) /*if user clicks outside model */{
    modal2.style.display = "none"; /*modal gets closed */
  }
 else if (event.target == modal3) /*if user clicks outside model */{
    modal3.style.display = "none"; /*modal gets closed */
  }
}