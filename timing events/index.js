// js timing events

// setTimeout(()=>{
//     console.log('hello')

// }, 2000)

// settime out event

// setTimeout(display, 2000);

// function display(){
//     console.log('hello')
// }

// startclock
// () and stop clock functions using setInterval method
let count = 1; // counter variable to keep track of the number of times interval has been
// executed
let intervalId = setInterval(startClock, 1000); // setInterval method to execute the startClock function every 1 second
function startClock() {
    console.log("Bangladesh");
    if (count === 5) {
        clearInterval(intervalId); // clearInterval method to stop the execution of the setInterval method
    }
    count++;
    }

