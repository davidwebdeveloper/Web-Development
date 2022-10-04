/* 
Understanding the Problem
1. What is a temperature Amplitude ?
2. how to find Max and Min value of Array?
3. How to ignore a error relesase by sensor ?

Breaking into sub Problem
1. calculate min value
2. calculate max value
3. ignored the value of error
4. subraction of max and min value is return it
*/

//(i). Actual Function Defination
const tempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (i = 0; i < temps.length; i++) {
    let tempArray = temps[i];
    //3. ignore error value given by sensor
    if (typeof tempArray !== "number") {
      continue;
    }
    // 2. caluculate max value
    if (tempArray > max) {
      max = tempArray;
    }
    // 1. calculate min value
    if (tempArray < min) {
      min = tempArray;
    }
  }
  console.log(max);
  console.log(min);
  // 4. subtraction of max and min value is return it
  return max - min;
};
const final = tempAmplitude([-3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5]);
console.log(final);
