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

  function list(data) {
    const ulElement = document.createElement('ul');

    for(const key in data) {
      const liElement = document.createElement('li');

      liElement.textContent = key;

      const nestedUl = list(data[key]);

      liElement.appendChild(nestedUl);
      ulElement.appendChild(liElement);
    }

    return ulElement;
  }

  const treeList = list(data);

  element.appendChild(treeList);
}


createTree(tree, food);
