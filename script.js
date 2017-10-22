var secondHand = document.querySelector('.second-hand');
var minuteHand = document.querySelector('.minute-hand');
var hourHand = document.querySelector('.hour-hand');
var allHands = document.querySelectorAll('.hand');
function setDate()
{
    var now = new Date();
    var seconds = now.getSeconds();
    var secondsDegrees =  ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    var minutes = now.getMinutes();
    var minutesDegrees = ((minutes / 60) * 360) + 90 ;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    var hours = now.getHours();
    var hoursDegrees = ((hours / 12) * 360) + 90 ;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    if(secondsDegrees === 90) {
        allHands.forEach(hand => hand.style.transition = 'none');
    } else {
        allHands.forEach(hand => hand.style.transition = '');
    }
    document.querySelector('h1').innerHTML = (now.getMonth() + 1) + "-" + now.getDate() + "-" + now.getFullYear() + " " + now.getHours()+ ":" + now.getMinutes()+ ":" + now.getSeconds();
}
setInterval(setDate,1000);