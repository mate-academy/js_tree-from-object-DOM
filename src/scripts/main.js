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
  for (const key in data) {
    const newLi = document.createElement('li');

    newLi.textContent = `${key}`;

    if (
      data[key] !== null &&
      typeof data[key] === 'object' &&
      Object.keys(data[key]).length
    ) {
      const newUl = document.createElement('ul');

      createTree(newUl, data[key]);
      newLi.append(newUl);
    }

    element.append(newLi);
  }
}

createTree(tree, food);
