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

  for (const key in data) {
    const li = document.createElement('li');
    const value = data[key];

    li.textContent = key;
    ul.appendChild(li);

    if (Object.keys(value).length > 0) {
      createTree(li, value);
    }
  }

  element.appendChild(ul);
}

createTree(tree, food);
