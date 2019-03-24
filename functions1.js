// Get the modal
var modal1 = document.getElementById('menuModal');
var modal2 = document.getElementById('contactModal');
var modal3 = document.getElementById('aboutModal');

// Get the button that opens the modal
var btn1 = document.getElementById("menuButton");
var btn2 = document.getElementById("contactButton");
var btn3 = document.getElementById("aboutButton");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[2];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn1.onclick = function() /*when the button gets clicked, display the menu*/{
  modal1.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}
// When the user clicks on the button, open the modal 
btn2.onclick = function() /*when the button gets clicked, display the menu*/{
  modal2.style.display = "block";
}
span2.onclick = function() {
  modal2.style.display = "none";
}


// When the user clicks on the button, open the modal 
btn3.onclick = function() /*when the button gets clicked, display the menu*/{
  modal3.style.display = "block";
}


span3.onclick = function() {
  modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) /*if user clicks outside model */{
    modal1.style.display = "none"; /*modal gets closed */
  }
  if (event.target == modal2) /*if user clicks outside model */{
    modal2.style.display = "none"; /*modal gets closed */
  }
  if (event.target == modal3) /*if user clicks outside model */{
    modal3.style.display = "none"; /*modal gets closed */
  }

}


// When the user clicks anywhere outside of the modal, close it

