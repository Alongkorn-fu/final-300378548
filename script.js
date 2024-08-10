// // get the date from the input field
// function getDate() {

// }

// // start the countdown
// function start() {

//     // Set the date we're counting down to
//     setInterval(updateCountdown, 1000);



//     let datereceive = document.getElementById('birthday');
//     let show = document.getElementById('demo');

//     // Update the count down every 0.1 second
//     function updateCountdown() {
//         let targetDate = new Date(datereceive.value);
//         let now = new Date();

//         // Get today's date and time
//         var now = new Date().getTime();


//         // Find the distance between now and the count down date
//         var distance = countDownDate - now;
//         datereceive.addEventListener('input', updateCountdown);



//         // Time calculations for days, hours, minutes and seconds
//         let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
//         let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
//         let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

//         document.getElementById('days').innerHTML = days;
//         document.getElementById('hrs').innerHTML = hrs;
//         document.getElementById('mins').innerHTML = mins;
//         document.getElementById('secs').innerHTML = secs;

//         // Output the result in an element with id="demo"
//         document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";

//         // If the count down is over, write some text 
//         if (distance < 0) {
//             clearInterval(x);
//             document.getElementById("demo").innerHTML = "Date is Expired";
//           }
        
//         }

//         if (isNaN(targetDate.getTime())) {
//             result.textContent = "Please select a valid date and time.";
//             show;
//         }

//         const timeDifference = targetDate - now;

//         if (timeDifference <= 0) {
//             result.textContent = "The selected time has passed.";
//             console.
//             show;
//         }

       

//         show.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
//     }

   
///////////////////////////////////////////////////////////////////////////////////////
   
// get the date from the input field
function getDate() {
}

// start the countdown
function start() {

    let datereceive = document.getElementById('birthday');
    let show = document.getElementById('demo');

    function updateCountdown() {
        let targetDate = new Date(datereceive.value);
        let now = new Date();

        if (isNaN(targetDate.getTime())) {
            result.textContent = "Please select a valid date and time.";
            show;
        }

        const timeDifference = targetDate - now;

        if (timeDifference <= 0) {
            result.textContent = "The selected time has passed.";
            console.
            show;
        }

        let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        show.textContent = `${days}days ${hours}hrs ${minutes}mins ${seconds}secs` ;
    }

   
    setInterval(updateCountdown, 1000);

   
    datereceive.addEventListener('input', updateCountdown);

}
