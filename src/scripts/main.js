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
  const list = document.createElement('ul');

  Object.keys(data).forEach((key) => {
    const elementsOfList = document.createElement('li');

    elementsOfList.textContent = key;

    if (typeof data[key] === 'object') {
      createTree(elementsOfList, data[key]);
    }

    list.appendChild(elementsOfList);
  });

  element.appendChild(list);
}

createTree(tree, food);
