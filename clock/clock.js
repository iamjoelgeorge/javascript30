let hourHand = document.querySelector(".hour-hand");
let minHand = document.querySelector(".min-hand");
let secHand = document.querySelector(".sec-hand");

setInterval(function() {
        let date = new Date();
        let hour = (date.getHours() % 12) || 12;
        let min = date.getMinutes();
        let sec = date.getSeconds();

        let hourDegree = ((hour / 12) * 360) + 90;
        let minDegree = ((min / 60) * 360) + 90;
        let secDegree = ((sec / 60) * 360) + 90;
        hourHand.style.transform = `rotate(${hourDegree}deg)`;
        minHand.style.transform = `rotate(${minDegree}deg)`;
        secHand.style.transform = `rotate(${secDegree}deg)`;
    }, 1000)
    // console.log(secDegree);