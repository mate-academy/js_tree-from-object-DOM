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
  const ulElem = document.createElement('ul');

  element.append(ulElem);

  for (const key in data) {
    const liElem = document.createElement('li');

    ulElem.append(liElem);
    liElem.textContent = key;

    if (Object.keys(data[key]).length > 0) {
      createTree(liElem, data[key]);
    }
  }
}

createTree(tree, food);
