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
  if (Object.keys(data).length === 0 || !element) {
    return;
  }

  const ul = document.createElement('ul');

  for (const char of Object.keys(data)) {
    const li = document.createElement('li');

    li.textContent = char;

    createTree(li, data[char]);

    ul.append(li);
  }

  element.append(ul);
}

createTree(tree, food);
