/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 */
export function cookingStatus(timer) {
  if (timer === undefined) {
    return 'You forgot to set the timer.';
  }

  return timer !== 0 ? 'Not done, please wait.' : 'Lasagna is done.';
}

export function preparationTime(array, layers = 2) {
  return array.length * layers;
}

export function quantities(array) {
  let result = { noodles: 0, sauce: 0 };
  const NOODLES = 50; // 50 grams
  const SAUCE = 0.2; // 0.2 liters

  for (let i = 0; i <= array.length; i++) {
    if (array[i] === 'noodles') {
      result.noodles += NOODLES;
    } else if (array[i] === 'sauce') {
      result.sauce += SAUCE;
    }
  }

  return result;
}

export function addSecretIngredient(friendsList, myList) {
  const lastIngredient = friendsList[friendsList.length - 1];
  myList.push(lastIngredient);
}

export function scaleRecipe(recipe, number) {
  const newRecipe = {};

  for (const ingredient in recipe) {
    newRecipe[ingredient] = (recipe[ingredient] * number) / 2;
  }

  return newRecipe;
}
