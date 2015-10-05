(function (){


  // Time function
  function clock () {

    // Create Date with hour/minute/second variables
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    // Jquery Assignment to text ID
    var hourZero = (hours < 10) 
      ? $('#hour').text('0' + hours) : $('#hour').text(hours);
    var minZero = (minutes < 10) 
      ? $('#minute').text(':0' + minutes) : $('#minute').text(':' + minutes);
    var secZero = (seconds < 10) 
      ? $('#second').text(':0' + seconds) : $('#second').text(':' + seconds);

  };

  clock();

  setInterval(clock,1000);



}());