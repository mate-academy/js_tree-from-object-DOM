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
  // WRITE YOUR CODE HERE
  const list = document.createElement('ul');

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const elementOfList = document.createElement('li');

      elementOfList.textContent = key;

      if (Object.keys(data[key]).length > 0) {
        createTree(elementOfList, data[key]);
      }

      list.appendChild(elementOfList);
    }
    element.appendChild(list);
  }
}

createTree(tree, food);
