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

  for (const iteam in data) {
    const ul = document.createElement('ul');
    const li = document.createElement('li');

    li.textContent = iteam;
    element.append(ul);
    ul.append(li);

    if (Object.keys(data[iteam]).length !== 0) {
      createTree(li, data[iteam]);
    }
  }
}

createTree(tree, food);
