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
  const ul = document.createElement('ul');

  element.append(ul);

  for (const key of Object.keys(data)) {
    const newLi = document.createElement('li');

    ul.append(newLi);
    newLi.textContent = key;

    if (typeof data[key] === 'object' && Object.keys(data[key]).length > 0) {
      createTree(newLi, data[key]);
    }
  }
}

createTree(tree, food);
