var countdownInterval;
var countdownSpeed = 1000; // default speed 1 second

function startCountdown(speed) {
  clearInterval(countdownInterval);
  countdownSpeed = speed;
  var countdown = 30; // default countdown value

  countdownInterval = setInterval(function() {
    document.getElementById('countdown').value = countdown;

    if (countdown > 0) {
      countdown--;
    } else {
      clearInterval(countdownInterval);
    }
  }, countdownSpeed);
}

document.getElementById('stop-button').addEventListener('click', function() {
  clearInterval(countdownInterval);
  document.getElementById('countdown').value = '';
});

document.getElementById('start-button-1').addEventListener('click', function() {
  startCountdown(1000); // 1 second speed
});

document.getElementById('start-button-2').addEventListener('click', function() {
  startCountdown(3000); // 3 second speed
});