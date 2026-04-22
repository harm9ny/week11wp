"use strict";  

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Harmony Bato
   Date:   April 21, 2026

*/

/* Execute the function to run and display the countdown clock */
runClock();
setInterval("runClock()",1000)

/*Function to create and run the countdown clock */
function runCountdown() {

   /* Store the current date and time */
   var currentDay = new Date();
   var dateStr = currentDay.toLocaleDateString();
   var timeStr = currentDay.toLocaleTimeString();

   /* Display the current date and time */
   document.getElementById("dateNow").innerHTML = 
   dateStr + "<br />" + timeStr;

   /* Calculate the days until January 1st */
   var newYear = new Date("January 1,2021");
   var nextYear = currentDay.getFullYear() + 1;
   var newYearDay = new Date("January 1," + nextYear);
   newYear.setFullYear(nextYear);
   var daysLeft = (newYearDay - currentDay) / (1000 * 60 * 60 * 24);
   daysLeft = (newYear - currentDay) / (1000 * 60 * 60 * 24);

   /* Calculate the hours left until New Year's Eve */
   var hrsLeft = (daysLeft - Math.floor(daysLeft))*24;

   /* Calculate the minutes left until New Year's Eve */
   var minsLeft = (hrsLeft - Math.floor(hrsLeft))*60;

   /* Calculate the seconds left until New Year's Eve */
   var secsLeft = (minsLeft - Math.floor(minsLeft))*60;  

   /* Display the time left until New Year's Eve */
   document.getElementById("days").textContent= Math.floor(daysLeft);
   document.getElementById("hrs").textContent= Math.floor(hrsLeft);
   document.getElementById("mins").textContent= Math.floor(minsLeft);
   document.getElementById("secs").textContent= Math.floor(secsLeft);
}