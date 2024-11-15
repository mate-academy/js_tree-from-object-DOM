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

function createTree(container, data) {
  const ul = document.createElement('ul');

  for (const key in data) {
    const li = document.createElement('li');

    li.textContent = key;

    if (Object.keys(data[key]).length) {
      createTree(li, data[key]);
    }

    ul.appendChild(li);
  }
  ul.setAttribute('id', 'tree');
  container.appendChild(ul);
}

const treeContainer = document.body;

createTree(treeContainer, food);
