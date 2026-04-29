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

  Object.keys(data).forEach((item) => {
    const liItem = document.createElement('li');

    liItem.textContent = item;
    ul.appendChild(liItem);

    if (typeof data[item] === 'object' && Object.keys(data[item]).length > 0) {
      createTree(liItem, data[item]);
    }
  });

  element.appendChild(ul);
}

createTree(tree, food);
