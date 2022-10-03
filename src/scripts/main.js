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

  const createLi = (key) => {
    list.innerHTML += `
      <li id = "${key}">
        ${key}
      </li>
    `;
  };

  Object.keys(data).forEach(createLi);

  element.append(list);

  for (const item in data) {
    if (Object.keys(data[`${item}`]).length !== 0) {
      createTree(document.querySelector(`#${item}`), data[`${item}`]);
    }
  }
}

createTree(tree, food);
