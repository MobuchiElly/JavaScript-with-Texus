    // setTimeout example
    setTimeout(function() {
      document.getElementById("output").textContent = "Timer has expired!";
    }, 3000); // Executes the code after a delay of 3000 milliseconds (3 seconds)

    // setInterval example
    // document.getElementById("btn-1").addEventListener("click", myIntervalFunction)
    // let count = 11;

    function interval() 
    { 
        setInterval(myIntervalFunction, 1000);
    };
    // Executes the code every 1000 milliseconds (1 second)
        
    function myIntervalFunction() {
      count--;
      document.getElementById("output").textContent = "Counter: " + count;

      if (count === 1) {
        count = 10;
        count--;
        // interval = setInterval(function(){
        //     count--;
        //     document.getElementById("output").textContent = "Counter: " + count;
        // }, 1000)
        if (count == 1) {
            return;
        clearInterval(interval); 
        // Stops the interval after count reaches 0
        }
    }
    }


// countDownThirty

// // countDownFifty

// // countdownEight