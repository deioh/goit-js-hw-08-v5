!function(){var e=document.getElementById("datetime-picker"),t=document.querySelector("button[data-start]"),n=document.getElementsByClassName("value");a(!0);var o={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose:function(e){console.log("selectedDates[0]:",e[0]);var t=e[0];if(console.log("inputDateValue:",t),!function(e){console.log("Checking if the given date is in the future"),console.log("Current date:",new Date),console.log("Given date:",new Date(e));var t=new Date,n=new Date(e)>=t;return console.log("Result:",n?"Future date":"Past date"),n}(t))return console.log("Input date is not in the future"),void alert("Please choose a date in the future");console.log("Input date is in the future"),a(!1)}};flatpickr("#datetime-picker",o);var l=null;function a(e){e?t.setAttribute("disabled",!0):t.removeAttribute("disabled")}function r(e){var t=6e4,n=36e5,o=24*n;return{days:Math.floor(e/o),hours:Math.floor(e%o/n),minutes:Math.floor(e%o%n/t),seconds:Math.floor(e%o%n%t/1e3)}}t.addEventListener("click",(function(){console.log("Checking if intervalId is truthy"),l?(console.log("intervalId is truthy, clearing interval"),clearInterval(l),console.log("intervalId cleared"),l=null,console.log("intervalId set to null")):console.log("intervalId is falsy");document.querySelector("span[data-days]");var t=new Date(e.value).getTime()-Date.now();l=setInterval((function(){var e=r(t-=1e3);console.log(t),console.log("tickerId:",r(t)),n[0].textContent=e.days,n[1].textContent=e.hours,n[2].textContent=e.minutes,n[3].textContent=e.seconds,t<=0?(console.log("ticker is <= 0, ending the interval"),clearInterval(l),l=null):console.log("ticker is > 0, continuing the interval")}),1e3)}))}();
//# sourceMappingURL=02-timer.6d538880.js.map
