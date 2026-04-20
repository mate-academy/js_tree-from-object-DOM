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

const div = document.createElement('div');

div.id = 'tree';
document.body.appendChild(div);

const tree = document.querySelector('#tree');

function createTree(element, data) {
  const ul = document.createElement('ul');

  for (const key in data) {
    const li = document.createElement('li');
    const dataKey = data[key];

    li.textContent = key;

    if (Object.keys(dataKey).length > 0) {
      createTree(li, dataKey);
    }
    ul.appendChild(li);
  }
  element.appendChild(ul);

  return element;
}

createTree(tree, food);
