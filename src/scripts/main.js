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

  element.append(list);

  const createLi = (item) => {
    list.innerHTML += `
      <li id = "${item}">
        ${item}
      </li>
    `;

    if (Object.keys(data[`${item}`]).length !== 0) {
      createTree(document.querySelector(`#${item}`), data[`${item}`]);
    }
  };

  Object.keys(data).forEach(createLi);
}

createTree(tree, food);
