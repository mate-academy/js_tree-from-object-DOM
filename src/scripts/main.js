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

  element.appendChild(ul);

  for (const one in data) {
    const li = document.createElement('li');

    li.textContent = one;
    ul.appendChild(li);

    if (Object.keys(data[one]).length !== 0) {
      createTree(li, data[one]);
    }
  }
}

createTree(tree, food);
