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
  for (const d in data) {
    const ul = document.createElement('ul');
    const li = document.createElement('li');

    li.textContent = d;
    ul.append(li);
    element.append(ul);

    if (Object.keys(data[d]).length !== 0) {
      createTree(ul, data[d]);
    }
  }
}

createTree(tree, food);
