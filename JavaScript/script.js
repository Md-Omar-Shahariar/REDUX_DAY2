const markWeight = 78;
const johnWeight = 92;
const markHeight = 1.69;
const johnHeight = 1.95;

const BMI = (Height, Weight) => {
  const bmiCount = Weight / Height ** 2;
  return bmiCount;
};

const markBmi = BMI(markHeight, markWeight);
const johnBmi = BMI(johnHeight, johnWeight);

const isMikeHigher = markBmi > johnBmi;

console.log(markBmi, johnBmi, isMikeHigher);
