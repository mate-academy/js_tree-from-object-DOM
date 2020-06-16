'use strict';

const food = {
  'Meat': {
    'Pork': {},
    'Beef': {},
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
  // WRITE YOUR CODE HERE
  const foodList = document.createElement('ul');

  element.append(foodList);

  for (const key in data) {
    const elem = document.createElement('li');

    elem.textContent = key;
    foodList.append(elem);

    if (Object.keys(data[key]).length) {
      createTree(foodList, data[key]);
    }
  }
}

createTree(tree, food);
