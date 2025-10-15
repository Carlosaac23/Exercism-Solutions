//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (string) => {
  return [...'abcdefghijklmnopqrstuvwxyz'].every(character => string.toLowerCase().includes(character))
};
