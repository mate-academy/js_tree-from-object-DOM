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

const mainTrea = document.createElement('ul');

mainTrea.id = 'tree';
document.body.appendChild(mainTrea);

const tree = document.querySelector('#tree');

function createTree(element, data) {
  // WRITE YOUR CODE HERE
  for (const i in data) {
    const li = document.createElement('li');

    li.innerText = i;
    element.appendChild(li);

    if (Object.keys(data[i]).length !== 0) {
      const recTree = document.createElement('ul');

      li.appendChild(recTree);

      createTree(recTree, data[i]);
    }
  }
}

createTree(tree, food);
