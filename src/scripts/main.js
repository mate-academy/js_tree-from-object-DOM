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
  const newList = document.createElement('ul');

  Object.keys(data).forEach((key) => {
    const newKey = document.createElement('li');

    const countObjProperties = Object.keys(data[key]).length;

    newKey.textContent = key;

    if (countObjProperties > 0) {
      createTree(newKey, data[key]);
    }

    newList.appendChild(newKey);
  });

  if (element === null) {
    const bodyElement = document.querySelector('body');

    newList.setAttribute('id', 'tree');

    bodyElement.appendChild(newList);
  } else {
    element.appendChild(newList);
  }
}

createTree(tree, food);
