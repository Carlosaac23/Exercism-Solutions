//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, number) => {
  if (number === 1) return `${name}, you are the ${number}st customer we serve today. Thank you!`;
  if (number === 2) return `${name}, you are the ${number}nd customer we serve today. Thank you!`;
  if (number === 3) return `${name}, you are the ${number}rd customer we serve today. Thank you!`;

  return `${name}, you are the ${number}th customer we serve today. Thank you!`;
};
