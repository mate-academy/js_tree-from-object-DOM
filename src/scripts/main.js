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
  if (Object.keys(data).length === 0) {
    return;
  }

  const ul = document.createElement('ul');

  for (const entry of Object.entries(data)) {
    const li = document.createElement('li');

    li.textContent = entry[0];
    ul.append(li);
    createTree(li, entry[1]);
  }

  element.append(ul);
}

createTree(tree, food);
