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
  const ul = document.createElement('ul');

  for (const item in data) {
    const li = document.createElement('li');
    li.textContent = item;

    if (Object.keys(item).length !== 0) {
      createTree (li, data[item]);
    }

    ul.appendChild(li);
  }
    
  element.appendChild(ul);
}


createTree(tree, food);