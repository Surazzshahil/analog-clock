let hourHand = document.querySelector('#hour');
let minuteHand = document.querySelector('#minute');
let secondHand = document.querySelector('#second');

function analogClock(){
    let date = new Date();
    let hour = date.getHours()%12;
    let minute = date.getMinutes();
    let second = date.getSeconds();

    let hourDeg = (hour*30)+(0.5*minute);
    let minuteDeg =(minute*6)+(0.1* second);
    let secondDeg = second * 6;

    hourHand.style.transform="rotate("+hourDeg+"deg)";
    minuteHand.style.transform="rotate("+minuteDeg+"deg)";
    secondHand.style.transform="rotate("+secondDeg+"deg)";

    setTimeout(analogClock,1000)
}
analogClock();