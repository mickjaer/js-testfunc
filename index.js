// Import javascrip files
import { Reduce2, mapTest } from './testarryfunc.js';
import { NamesWithEmailSplit } from './NamesWithEmailSplit.js'
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');

logToHtml(`<h1>JS Tester</h1>`);

// Test dato compare
 logToHtml(`<h3>Test Date compare</h3>`);
var expireDay = new Date(2020, 4, 12,10,8);
var toDay = new Date();
// Wed Apr 29 2020 22:00:00 GMT+0200 (Central European Summer Time)
logToHtml('toDay: ' + toDay);
logToHtml('expireDay: ' + expireDay);
if (expireDay> toDay)
  logToHtml('ExpireDay is after today');
if (expireDay< toDay)
  logToHtml('ExpireDay is before today');

if (expireDay === toDay)
  logToHtml('ExpireDay is equal today');

//console.log(toDay)


// Test Split Name email
// logToHtml(`<h3>Test Split Name Email function</h3>`);
//   let arrRes = NamesWithEmailSplit('ole hansen,oleh@test.dk\nSvend Petersen,svendp@test.dk');
//   arrRes.forEach((e)=>{
//      logToHtml(e);
//   })
 

// Test Map Keys functions
// logToHtml(`<h1>Test Map Keys function</h1>`);
// logToHtml(Reduce2());

// returns an array of objects
// const testRes = [...mapTest];

// [...mapTest].forEach(function(item) {
//   logToHtml('Navn: ' + item.name + ' - Species: ' + item.species)
// });


function logToHtml(text, insertbreak = true) {
  if (text == '') return;
  
  const appDiv = document.getElementById('app');
  let nytext = "";
  if (appDiv.innerText != "")
    nytext = appDiv.innerHTML + text;
  else
    nytext = text;
  if (insertbreak)
    nytext = nytext + "<br />"

  appDiv.innerHTML = nytext;
};