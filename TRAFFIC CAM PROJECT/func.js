let intervalCountDownThirty, intervalCountDownEight, intervalCountDownFifty, intervalCountDownThirty2;
let speedFactor = 1;
let btn1Clicked = false; // Flag to track if btn-1 has been clicked

// Event handler for btn-1
document.getElementById("btn-1").addEventListener("click", function() {
  countDownThirtyCall();
  btn1Clicked = true; // Set flag to true when btn-1 is clicked
});

// Event handler for btn-2
document.getElementById("btn-2").addEventListener("click", function() {
  if (btn1Clicked) {
    speedFactor = 3; // Increase speed factor to 3

    // Implement logic to check the current color and take appropriate actions if necessary
    let currentColor = document.getElementsByClassName("light")[0].classList[1];
    if (currentColor === "red") {
      clearInterval(intervalCountDownThirty);
      let currentValue = parseInt(document.getElementById("input-screen").value.split(" ")[1]);
      intervalCountDownThirty = setInterval(function() {
        countDownThirty(currentValue);
      }, 3000 / speedFactor);
    } else if (currentColor === "yellow") {
      clearInterval(intervalCountDownEight);
      let currentValue = parseInt(document.getElementById("input-screen").value.split(" ")[1]);
      intervalCountDownEight = setInterval(function() {
        countDownEight(currentValue);
      }, 3000 / speedFactor);
    }
  }
});

// Event handler for STOP button
document.getElementById("stop-btn").addEventListener("click", stopBtn);

// Stop button function
function stopBtn() {
  clearInterval(intervalCountDownThirty);
  clearInterval(intervalCountDownEight);
  clearInterval(intervalCountDownFifty);
  clearInterval(intervalCountDownThirty2);
  document.getElementById("input-screen").value = "";
  turnOffLights();
}

// Function to turn off all lights
function turnOffLights() {
  let x = document.getElementsByClassName("light red");
  for (let n = 0; n < x.length; n++) {
    x[n].style.backgroundColor = "black";
  }
  let y = document.getElementsByClassName("light yellow");
  for (let n = 0; n < y.length; n++) {
    y[n].style.backgroundColor = "black";
  }
  let z = document.getElementsByClassName("light green");
  for (let n = 0; n < z.length; n++) {
    z[n].style.backgroundColor = "black";
  }
}

function turnLightRed(time) {
  let y = document.getElementsByClassName("light red");
  for (let n = 0; n < y.length; n++) {
    y[n].style.backgroundColor = "red";
  }
  // Resets the color after the specified time
  setTimeout(function() {
    for (let n = 0; n < y.length; n++) {
      y[n].style.backgroundColor = "black";
    }
  }, time);
}

function turnLightGreen() {
  let y = document.getElementsByClassName("light green");
  for (let n = 0; n < y.length; n++) {
    y[n].style.backgroundColor = "green";
  }
}

function turnLightYellow(time) {
  let y = document.getElementsByClassName("light yellow");
  for (let n = 0; n < y.length; n++) {
    y[n].style.backgroundColor = "yellow";
  }
  // Reset the color after the specified time
  setTimeout(function() {
    for (let n = 0; n < y.length; n++) {
      y[n].style.backgroundColor = "black";
    }
  }, time);
}

function countDownThirtyCall() {
  let count = parseInt(document.getElementById("input-screen").value.split(" ")[1]) || 30;
  countDownThirty(count);
  turnLightRed(30000);
  intervalCountDownThirty = setInterval(function() {
    countDownThirty(count);
  }, 1000);

  function countDownThirty(currentValue) {
    document.getElementById("input-screen").value = "Count: " + currentValue;
    currentValue--;

    if (currentValue === -1) {
      clearInterval(intervalCountDownThirty);
      countDownEightCall();
    }
  }
}

function countDownEightCall() {
  let count = 8;
  intervalCountDownEight = setInterval(function() {
    countDownEight(count);
  }, 1000);
  turnLightYellow(9000);

  function countDownEight(currentValue) {
    document.getElementById("input-screen").value = "Count: " + currentValue;
    currentValue--;

    if (currentValue === -1) {
      clearInterval(intervalCountDownEight);
      turnLightGreen();
    }
  }
}

function countDownFiftyCall() {
  let count = 50;
  countDownFifty(count);
  turnLightRed(147000);
  intervalCountDownFifty = setInterval(function() {
    countDownFifty(count);
  }, 3000);

  function countDownFifty(currentValue) {
    document.getElementById("input-screen").value = "Count: " + currentValue;
    currentValue--;

    if (currentValue === -1) {
      clearInterval(intervalCountDownFifty);
      countDownThirtyCall();
    }
  }
}

function countDownThirty2Call() {
  let count = 30;
  turnLightYellow(87000);
  intervalCountDownThirty2 = setInterval(function() {
    countDownThirty2(count);
  }, 3000);

  countDownThirty2(count);

  function countDownThirty2(currentValue) {
    document.getElementById("input-screen").value = "Count: " + currentValue;
    currentValue--;

    if (currentValue === -1) {
      clearInterval(intervalCountDownThirty2);
      turnLightGreen();
    }
  }
}