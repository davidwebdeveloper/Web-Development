/*

Given an array of forcasted maximum temperatures, the thermometer
displays a string with these temperatures.

-------------------------------------------------------------------
Understanding the problem
1. display string
2. display degree operator in the console ?
3. how to display days from the given input
4. how to store values into arays
-------------------------------------------------------------------
Breaking into sub problems
1. 
------------------------------------------------------------------

 */
const printforcast = function (temps) {
  for (i = 0; i < temps.length; i++) {
    let tempArray = temps[i];
    let value = [];
    value.push(tempArray);
  }
  console.log(value);
  return value;
};
const final = printforcast(5, 6, 7);
console.log(final);
