// Variables to control light flow
let redActive = true;
let greenActive = true;
let yellowActive = true;

// Function to turn off all lights
function turnOffLights() {
    let lights = document.getElementsByClassName("light");
    for (let i = 0; i < lights.length; i++)
    {
        lights[i].style.backgroundColor = "black";
    }
}

// Function for redlight
function turnLightRed()
{
    if (redActive)
    {
        let y = document.getElementsByClassName("light red");
        for (let n = 0; n < y.length; n++)
        {
            y[n].style.backgroundColor = "red";
        }
    }
}

// FUNCTION TURNS LIGHT GREEN
function turnLightGreen()
{
    if (greenActive)
    {
        let y = document.getElementsByClassName("light green");
        for (let n = 0; n < y.length; n++)
        {
            y[n].style.backgroundColor = "green";
        }
    }
}

// FUNCTION TURNS LIGHT YELLOW
function turnLightYellow()
{
    if (yellowActive)
    {
        let y = document.getElementsByClassName("light yellow");
        for (let n = 0; n < y.length; n++)
        {
            y[n].style.backgroundColor = "yellow";
        }
    }
}

// Stop button function
function stopBtn()
{
    clearInterval(interval);
    document.getElementById("input-screen").value = '';
    turnOffLights();
}


// FUNCTION COUNTS DOWN FROM THIRTY AT 1SECOND PER COUNT
function countDownThirtyO()
{
    let count = 30;
    if (count >= 26)
    {redActive = true}
    else
    {redActive = false}


    countDownThirty();
    turnLightRed();
    redActive = true;
    let Interval = setInterval(countDownThirty, 1000);
    function countDownThirty()
    {
        document.getElementById("input-screen").value="Count: " + count;
        count--;
  
        if (count == 26)
        {  
            countDownEightO();
        }
    }
}

// FUNCTION COUNTS DOWN TO EIGHT AT 1 SECOND PER COUNT
function countDownEightO()
{
    let count = 8;
    turnLightYellow();
    let Interval = setInterval(countDownEight, 1000);
    function countDownEight()
    {
        document.getElementById("input-screen").value="Count: " + count;
        count--;
    
        redActive = false; 
        yellowActive = true;
        turnLightYellow();
    
        if (count == 0)
        {
            clearInterval(Interval);
        }
    }
}

// FUNCTION COUNTS DOWN FROM FIFTY AT 3 SECONDS PER COUNT
function countDownFiftyO()
{
    let count = 50;
    countDownFifty();
    let Interval = setInterval(countDownFifty, 3000);
    function countDownFifty()
    {
        document.getElementById("input-screen").value="Count: " + count;
        count--;

        if (count == 0)
        {
            clearInterval(Interval);
        }
    }
}

    // FUNCTION COUNTS DOWN FROM THIRTY AT 3 SECONDS PER COUNT
function countDownThirtyN()
{
    let count = 30;
    countDownThirty();
    let Interval = setInterval(countDownThirty, 3000);
    function countDownThirty()
    {
        document.getElementById("input-screen").value="Count: " + count;
        count--;
    
        if (count == 0)
        {
            clearInterval(Interval);
        }
    }
}

// Event handler for btn-1
document.getElementById("btn-1").addEventListener("click", countDownThirtyO);

// Event handler for btn-2
document.getElementById("btn-2").addEventListener("click", countDownFiftyO);

// Event HAndler for STOP button
document.getElementById("stop-btn").addEventListener("click", stopBtn);