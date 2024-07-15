'use strict';

const food = {
  Drink: {
    Wine: {},
    Schnaps: {},
  },

  Fruit: {
    Red: {
      Cherry: {},
      Strawberry: {},
    },
    Yellow: {
      Banana: {},
      Pineapple: {},
    },
  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  // WRITE YOUR CODE HER
  const newUl = document.createElement('ul');

  for (const key in data) {
    const newLi = document.createElement('li');

    newLi.textContent = key;

    if (Object.keys(data[key]).length !== 0) {
      createTree(newLi, data[key]);
    }

    newUl.append(newLi);
  }

  element.append(newUl);
}

createTree(tree, food);
