console.clear();
// href
// console.log(location.href);

// protocol
// console.log(location.protocol);

// hostname
// console.log(location.hostname);

// port
// console.log(location.port);
let locationDiv = document.querySelector('.location-div');
// console.log(locationDiv);

let p1 = locationDiv.children[0];
p1.textContent = location.href;

let p2 = locationDiv.children[1];
p2.textContent = location.hostname;

const button = document.getElementById("btn");
button.addEventListener("click", function () {
    location.assign("https://www.google.com");
    });
