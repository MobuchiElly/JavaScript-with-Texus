// Variables to control light flow
let redActive = false;
let greenActive = false;
let yellowActive = false;
let interval;

// Event handler for btn-1
document.getElementById("btn-1").addEventListener("click", stopTrafficLight);

// Event handler for btn-2
document.getElementById("btn-2").addEventListener("click", startCountDownThirty);

// Event handler for btn-3
document.getElementById("btn-3").addEventListener("click", startCountDownFifty);

// Stop button function
function stopTrafficLight() {
    clearInterval(interval);
    document.getElementById("input-screen").value = ' ';
    turnOffLights();
}

// Function to turn off all lights
function turnOffLights() {
    let lights = document.getElementsByClassName("light");
    for (let i = 0; i < lights.length; i++) {
        lights[i].style.backgroundColor = "black";
    }
}

// Function for red light
function turnLightRed() {
    if (redActive) {
        let redLights = document.querySelector(".light-red");
        // for (let i = 0; i < redLights.length; i++) {
            redLights[i].style.backgroundColor = "red";
        // }
    }
}

// Function for green light
function turnLightGreen() {
    if (greenActive) {
        let greenLights = document.getElementsByClassName("light-green");
        for (let i = 0; i < greenLights.length; i++) {
            greenLights[i].style.backgroundColor = "green";
        }
    }
}

// Function for yellow light
function turnLightYellow() {
    if (yellowActive) {
        let yellowLights = document.getElementsByClassName("light-yellow");
        for (let i = 0; i < yellowLights.length; i++) {
            yellowLights[i].style.backgroundColor = "yellow";
        }
    }
}

// Start count down for red, yellow, and green lights (30-0, 8-0, 0-30)
function startCountDownThirty() {
    clearInterval(interval);
    // turnOffLights();
    redActive = true;
    yellowActive = false;
    greenActive = false;
    let count = 30;
    interval = setInterval(() => {
        document.getElementById("input-screen").value = "Count: " + count;
        if (count >= 0 && count <= 30) {
            turnLightRed();
        }
        if (count <= 8) {
            redActive = false;
            yellowActive = true;
            turnLightYellow();
        }
        if (count <= 0) {
            clearInterval(interval);
            turnOffLights();
        }
        count--;
    }, 1000);
}

// Start count down for red, yellow, and green lights (50-0, 30-0, 0-30)
function startCountDownFifty() {
    clearInterval(interval);
    // turnOffLights();
    redActive = true;
    yellowActive = false;
    greenActive = false;
    let count = 50;
    interval = setInterval(() => {
        document.getElementById("input-screen").value = "Count: " + count;
        if (count >= 0 && count <= 50) {
            turnLightRed();
        }
        if (count <= 30) {
            redActive = false;
            yellowActive = true;
            turnLightYellow();
        }
        if (count <= 0) {
            clearInterval(interval);
            turnOffLights();
        }
        count--;
    }, 3000);
}