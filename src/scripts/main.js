'use strict';

const food = {
  'Drink': {
    'Wine': {},
    'Schnaps': {},
  },

  'Fruit': {
    'Red': {
      'Cherry': {},
      'Strawberry': {},
    },
    'Yellow': {
      'Banana': {},
      'Pineapple': {},
    },

  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  const list = document.createElement('ul');

  for (const keys in data) {
    list.innerHTML += `
      <li id = "${keys}">
        ${keys}
      </li>
    `;
  }

  element.append(list);

  for (const keys in data) {
    if (Object.keys(data[`${keys}`]).length !== 0) {
      createTree(document.querySelector(`#${keys}`), data[`${keys}`]);
    }
  }
}

createTree(tree, food);
