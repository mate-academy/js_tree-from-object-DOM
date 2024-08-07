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
  for (const item in data) {
    const li = document.createElement('li');

    li.textContent = item;
    element.appendChild(li);

    if (Object.keys(data[item] > 0)) {
      const ul = document.createElement('ul');

      li.appendChild(ul);

      createTree(ul, data[item]);
    }
  }
}

createTree(tree, food);
