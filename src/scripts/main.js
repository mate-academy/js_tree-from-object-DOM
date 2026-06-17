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
  const keys = Object.keys(data);
  if (keys.length === 0) return;

  const ul = document.createElement('ul');

  keys.forEach(key => {
    const li = document.createElement('li');
    li.textContent = key;
    ul.appendChild(li);

    if (Object.keys(data[key]).length > 0) {
      createTree(li, data[key]);
    }
  });

  element.appendChild(ul);
}

createTree(tree, food);
