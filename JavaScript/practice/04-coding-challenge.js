const johnHeight = 1.95;
const johnWeight = 92;
const johnBMI = johnWeight / (johnHeight * johnHeight);
const markHeight = 1.69;
const markWeight = 78;
const markBMI = markWeight / (markHeight * markHeight);
console.log("mark = " + johnBMI + " " + "Mark =" + markBMI);
console.log(`marks bmi is = ${markBMI} and John bmi is = ${johnBMI}`);
if (johnBMI > markBMI) {
  console.log("John's BMI is Higher than Mark's BMI.");
} else {
  console.log("Mark's BMI is Higher than John's BMI.");
}
