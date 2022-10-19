/*

Given an array of forcasted maximum temperatures, the thermometer
displays a string with these temperatures.

-------------------------------------------------------------------
Understanding the problem
1. convert a array to string
2. display degree operator in the console ?
3. how to display days from the given input
4. how to store values into arays
-------------------------------------------------------------------
Breaking into sub problems
1. 
------------------------------------------------------------------

 */
const printforcast = function (temps) {
  let str = " ";
  for (let i = 0; i < temps.length; i++) {
    str = str + `${temps[i]} degree celsius in ${i + 1} day ... `;
  }
  console.log(`...` + str);
};
const final = printforcast([5, 6, 7]);
