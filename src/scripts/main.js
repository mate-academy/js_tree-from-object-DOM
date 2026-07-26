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
  for (const key of Object.keys(data)) {
    if (Object.keys(data[key]).length !== 0) {
      const newLi = document.createElement('li');
      const newUl = document.createElement('ul');

      newLi.textContent = key;
      element.append(newLi);
      newLi.append(newUl);
      createTree(newUl, data[key]);
    }

    if (Object.keys(data[key]).length === 0) {
      const newLi = document.createElement('li');

      newLi.textContent = key;
      element.append(newLi);
      continue;
    }
  }
}

createTree(tree, food);
