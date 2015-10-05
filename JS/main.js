(function (){




// Create Date with hour/minute/second variables
var today = new Date();
var hours = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();

// Jquery Assignment to text ID
$('#hour').text(hours);
$('#minute').text(':' + minutes);
$('#second').text(':' + seconds);





}());