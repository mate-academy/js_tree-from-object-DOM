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
  const ulList = document.createElement('ul');

  element.appendChild(ulList);

  Object.keys(data).forEach((key) => {
    const liList = document.createElement('li');

    liList.textContent = key;

    ulList.appendChild(liList);

    if (Object.keys(data[key]).length > 0) {
      createTree(liList, data[key]);
    }
  });
}

createTree(tree, food);
