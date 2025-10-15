//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (text) => {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const lowerCasedText = text.toLowerCase()
  let pangram = false

  for (let i = 0; i < alphabet.length; i++) {
    if (lowerCasedText.includes(alphabet[i])) {
      pangram = true
    } else {
      pangram = false
    }
  }

  return pangram 
};
