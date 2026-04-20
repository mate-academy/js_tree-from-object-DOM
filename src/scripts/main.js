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
  if (!element || !data) {
    return;
  }

  const ul = document.createElement('ul');

  function buildTree(node, nodeData) {
    Object.entries(nodeData).forEach(([key, value]) => {
      const li = document.createElement('li');

      li.textContent = key;

      if (typeof value === 'object' && Object.keys(value).length > 0) {
        const childUl = document.createElement('ul');

        buildTree(childUl, value);
        li.appendChild(childUl);
      }

      node.appendChild(li);
    });
  }

  buildTree(ul, data);
  element.appendChild(ul);
}

createTree(tree, food);
