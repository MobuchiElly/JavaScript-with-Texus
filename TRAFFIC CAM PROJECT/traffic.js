let intervalCountDownThirty;
let intervalCountDownEight;
let intervalCountDownFifty;
let intervalCountDwnThirty;

// Event handler for btn-1
document.getElementById("btn-1").addEventListener("click", countDownThirtyCall);
// Event handler for btn-2
document.getElementById("btn-2").addEventListener("click", countDownFiftyCall);
// Event HAndler for STOP button
document.getElementById("stop-btn").addEventListener("click", stopBtn);

// // Stop button function
function stopBtn()
{
    clearInterval(intervalCountDownThirty);
    clearInterval(intervalCountDownEight);
    clearInterval(intervalCountDownFifty);
    clearInterval(intervalCountDwnThirty);

    document.getElementById("input-screen").value= "";
    turnOffLights();
}

// Function to turn off all lights
function turnOffLights()
{
    let x = document.getElementsByClassName("light red");
    for (let n = 0; n < x.length; n++)
    {
      x[n].style.backgroundColor = "black";
    }
    let y = document.getElementsByClassName("light yellow");
    for (let n = 0; n < y.length; n++)
    {
      y[n].style.backgroundColor = "black";
    }
    let z = document.getElementsByClassName("light green");
    for (let n = 0; n < z.length; n++)
    {
      z[n].style.backgroundColor = "black";
    }
}

function turnLightRed(time)
{
    let y = document.getElementsByClassName("light red");
    for (let n = 0; n < y.length; n++)
    {
      y[n].style.backgroundColor = "red";
    }
    // Resets the color after the specified time
    setTimeout(function()
    {
      for (let n = 0; n < y.length; n++)
      {
        y[n].style.backgroundColor = "black"; 
      }
    }, time);
  }

// FUNCTION TURNS LIGHT GREEN
function turnLightGreen()
{
        let y = document.getElementsByClassName("light green");
        for (let n = 0; n < y.length; n++)
        {
            y[n].style.backgroundColor = "green";
        }
}

// FUNCTION TURNS LIGHT YELLOW
function turnLightYellow(time)
{ 
        let y = document.getElementsByClassName("light yellow");
        for (let n = 0; n < y.length; n++)
        {
            y[n].style.backgroundColor = "yellow";
        }
            // Reset the color after the specified time
        setTimeout(function()
        {
            for (let n = 0; n < y.length; n++)
            {
                y[n].style.backgroundColor = "black";
            }
        }, time)
}


// // FUNCTION COUNTS DOWN FROM THIRTY AT 1SECOND PER COUNT
function countDownThirtyCall()
{
    let count = 30;
    countDownThirty();
    turnLightRed(30000);
    intervalCountDownThirty = setInterval(countDownThirty, 1000);
       // logic is to multiply setInterval time by count then subtract 1000(because 1 count=1000seconds) from it
    function countDownThirty()
    {
        document.getElementById("input-screen").value="Count: " + count;
        count--;
      
        if (count == -1)
        {  
                
            clearInterval(intervalCountDownThirty); //means 0 would be read
            countDownEightCall(); //would call this at zero
        }
    }   
}

// FUNCTION COUNTS DOWN TO EIGHT AT 1 SECOND PER COUNT
function countDownEightCall()
{
    let count = 8;
    intervalCountDownEight = setInterval(countDownEight, 1000);
    turnLightYellow(9000);
    function countDownEight()
    {
        document.getElementById("input-screen").value="Count: " + count;
        count--;
    
        if (count == -1)
        {
            clearInterval(intervalCountDownEight);
            turnLightGreen();
        }
    }
}

// // FUNCTION COUNTS DOWN FROM FIFTY AT 3 SECONDS PER COUNT
function countDownFiftyCall()
{
    let count = 50;
    countDownFifty();
    turnLightRed(147000);
    intervalCountDownFifty = setInterval(countDownFifty, 3000);
    function countDownFifty()
    {
        document.getElementById("input-screen").value="Count: " + count;
        count--;

        if (count == -1)
        {
            clearInterval(intervalCountDownFifty);
            countDwnThirtyCall();
        }
    }
}

//     // FUNCTION COUNTS DOWN FROM THIRTY AT 3 SECONDS PER COUNT
function countDwnThirtyCall()
{
    let count = 30;
    turnLightYellow(87000);
    intervalCountDwnThirty = setInterval(countDwnThirty, 3000);
    // logic is to multiply setInterval time by count then subtract 3000(because 3 count=3000seconds) from it
    countDwnThirty();
    function countDwnThirty()
    {
        document.getElementById("input-screen").value="Count: " + count;
        count--;
    
        if (count == -1)
        {
            clearInterval(intervalCountDwnThirty);
            turnLightGreen();
        }
    }
}