/* 
problem
--------------------------------------------------------------
David work for a companny building a smart home termometer.
our most recent task is this: " Given an two array of temperatures
day1 and day 2, calculate temperature amplitude that sometimes there
might be a sensor error."
--------------------------------------------------------------

Understanding the Problem
---------------------------------------------------------------
1. What is temperture amplitude? Answer: difference between max and min value of temperature
2. how to calculate min and max value?
3. how to ignored the error value give by the sensor ?
4. with two arrays. shoud we implement functionality twice ? No just combine two array into one.

Breaking into subproblem
-----------------------------------------------------------------
1. compute the max value ?
2. compute the min value ?
3. ignored the error value
4. subract max and min value and return it
5. how to merge two arrays

*/
const tempAmplitude = function (temp1, temps2) {
  let temps = temp1.concat(temps2);
  console.log(` combine temperature is = ${temps}`);
  let max = temps[0];
  let min = temps[0];
  for (i = 0; i < temps.length; i++) {
    let tempsCheck = temps[i];
    if (typeof tempsCheck !== "number") continue;
    if (tempsCheck > max) {
      max = tempsCheck;
    }
    if (tempsCheck < min) {
      min = tempsCheck;
    }
  }
  console.log(max);
  console.log(min);
  return max - min;
};
const david = tempAmplitude(
  [34, 12, "david", true, 45, 78, 09, 69],
  [7, 9, 19, 2, 3]
);
console.log(david);
