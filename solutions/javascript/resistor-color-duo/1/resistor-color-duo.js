//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];

export const decodedValue = colors => {
  const firstNumber = COLORS.indexOf(colors[0])
  const secondNumber = COLORS.indexOf(colors[1])
  return (firstNumber * 10) + secondNumber
};
