//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, number) => {
  if (number === 1) return `${name}, you are the ${number}st customer we serve today. Thank you!`;
  if (number === 2) return `${name}, you are the ${number}nd customer we serve today. Thank you!`;
  if (number === 3) return `${name}, you are the ${number}rd customer we serve today. Thank you!`;

  if (number > 9 && number < 100) {
    const lastNumber = String(number).split("")[1];

    if (Number(lastNumber) === 1 && number !== 11)
      return `${name}, you are the ${number}st customer we serve today. Thank you!`;
    if (Number(lastNumber) === 2 && number !== 12)
      return `${name}, you are the ${number}nd customer we serve today. Thank you!`;
    if (Number(lastNumber) === 3 && number !== 13)
      return `${name}, you are the ${number}rd customer we serve today. Thank you!`;
  } else if (number > 99) {
    const lastNumber = String(number).split("")[2];

    if (Number(lastNumber) === 1 && number !== 11)
      return `${name}, you are the ${number}st customer we serve today. Thank you!`;
    if (Number(lastNumber) === 2)
      return `${name}, you are the ${number}th customer we serve today. Thank you!`;
    if (Number(lastNumber) === 3)
      return `${name}, you are the ${number}rd customer we serve today. Thank you!`;
  }

  return `${name}, you are the ${number}th customer we serve today. Thank you!`;
};
