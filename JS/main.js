(function (){

// Create Date with hour/minute/second variables
var today = new Date();
var hours = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();


  // Select ID from HTML to input text
var txtHours = document.querySelector('#hour');
  // Create a node from our above answer ready for the DOM
var textNode = document.createTextNode(hours);
  // Append newly created node to our answer element
txtHours.appendChild(textNode);

   // Select ID from HTML to input text
var txtMinutes = document.querySelector('#minute');
  // Create a node from our above answer ready for the DOM
var textNode = document.createTextNode(minutes);
  // Append newly created node to our answer element
txtMinutes.appendChild(textNode);

   // Select ID from HTML to input text
var txtSeconds = document.querySelector('#second');
  // Create a node from our above answer ready for the DOM
var textNode = document.createTextNode(seconds);
  // Append newly created node to our answer element
txtSeconds.appendChild(textNode);

}());