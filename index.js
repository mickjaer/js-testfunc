// Import javascrip files
import { Reduce2, mapTest } from './testarryfunc.js';
import { NamesWithEmailSplit } from './NamesWithEmailSplit.js';
import './style.css';

// Write Javascript code!

/********************************** */

test2();
async function test2(){
  resetLogToHtmlText(`<h1>Test 2</h1>`);

  // returnAfter(2000);
  await   returnAfter(2000).then();
  // console.log('hello');
  logToHtml('returnAfter returned');


}
function returnAfter(millisec){
  logToHtml('returnAfter called: ');
  return new Promise(resolve => setTimeout(() => {logToHtml("returnAfter finished after " + millisec + ' millisec' )}, millisec));
}
/********************************** */

// test1();

async function test1(){
  resetLogToHtmlText(`<h1>Test 1</h1>`);
  await TestPromise('test 1',3000);
  await TestPromise('test 2',2000);
  
  

}
async function TestPromise(text, number) {
  logToHtml('TestPromise called: text: '+ text + ' number:' + number );
  return new Promise(async (resolve, reject) => {
    await new Promise(resolve => setTimeout(resolve, number));
    const a = 2 * 7;
    logToHtml('TestPromise resolve: ' + text);
    resolve('Result: ', a);

  }
    ,error=>{reject(error);

  });
}



// // Test dato compare
//  logToHtml(`<h3>Test Date compare</h3>`);
// var expireDay = new Date(2020, 4, 12,10,8);
// var toDay = new Date();
// // Wed Apr 29 2020 22:00:00 GMT+0200 (Central European Summer Time)
// logToHtml('toDay: ' + toDay);
// logToHtml('expireDay: ' + expireDay);
// if (expireDay> toDay)
//   logToHtml('ExpireDay is after today');
// if (expireDay< toDay)
//   logToHtml('ExpireDay is before today');

// if (expireDay === toDay)
//   logToHtml('ExpireDay is equal today');

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


function resetLogToHtmlText(header=''){
  const appDiv = document.getElementById('app');
  appDiv.innerHTML=header;
}
function logToHtml(text, insertbreak = true) {
  if (text == '') return;

  const appDiv = document.getElementById('app');
  let nytext = '';
  if (appDiv.innerText != '') nytext = appDiv.innerHTML + text;
  else nytext = text;
  if (insertbreak) nytext = nytext + '<br />';

  appDiv.innerHTML = nytext;
}
