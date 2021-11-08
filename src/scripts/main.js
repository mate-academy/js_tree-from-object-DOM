'use strict';

const food = {
  'Drink': {
    'Wine': {},
    'Schnaps': {},
  },

  'Fruit': {
    'Red': {
      'Cherry': {},
      'Strawberry': {},
    },
    'Yellow': {
      'Banana': {},
      'Pineapple': {},
    },

  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  for (const DrinkFruit in data) {
    const ulDrinkFruit = document.createElement('ul');
    const liDrinkFruit = document.createElement('li');

    element.append(ulDrinkFruit);
    ulDrinkFruit.append(liDrinkFruit);
    liDrinkFruit.textContent = DrinkFruit;

    if (Object.keys(data[DrinkFruit]) !== 0) {
      createTree(liDrinkFruit, data[DrinkFruit]);
    }
  }
};

createTree(tree, food);
