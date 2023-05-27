// document.querySelector('btn-1')

// function displayCountdown() {
//     var inputScreen = document.querySelector('input-screen').innerHTML="Hello";
//     inputScreen.innerHTML = "hello";
// }
// displayCountdown();

document.getElementById("btn-1").onclick = function(){
    btn1Redtimer();
    turnLightRed();
};

document.getElementById("stop-btn").onclick = function() {stopbtn()};
function btn1Redtimer()
{
    document.getElementById("input-screen").value='30';
}
// document.getElementById("btn-1").onclick = 
function turnLightRed()
{
    let y = document.getElementsByClassName("light red");
    for (let n = 0; n < y.length; n++)
    {
    y[n].style.backgroundColor = "red";
    }
}

function stopbtn()
{
    document.getElementById("input-screen").value='';
}