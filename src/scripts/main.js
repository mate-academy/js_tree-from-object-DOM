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

const ulTree = document.createElement('ul');

document.body.appendChild(ulTree);

function createTree(element, data) {
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const newLi = document.createElement('li');

      newLi.textContent = key;

      element.appendChild(newLi);

      if (typeof data[key] === 'object' && Object.keys(data[key]).length > 0) {
        const newUl = document.createElement('ul');

        newLi.appendChild(newUl);

        createTree(newUl, data[key]);
      }
    }
  }
}

createTree(ulTree, food);
