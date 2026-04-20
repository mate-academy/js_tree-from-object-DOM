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

const treeDiv = document.createElement('div');

treeDiv.setAttribute('id', 'tree');

document.querySelector('body').insertAdjacentElement('afterbegin', treeDiv);

const tree = document.querySelector('#tree');

function createTree(element, data) {
  // WRITE YOUR CODE HERE
  for (const key in data) {
    const tempUl = document.createElement('ul');
    const tempLi = document.createElement('li');

    tempLi.textContent = key;
    tempUl.appendChild(tempLi);

    element.appendChild(tempUl);

    if (data[key].length !== 0) {
      createTree(tempLi, data[key]);
    }
  }
}

createTree(tree, food);
