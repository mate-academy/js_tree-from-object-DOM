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
  const parentElement = element;
  const keyArr = Object.keys(data);

  parentElement.append(list);

  keyArr.forEach((key, i) => {
    list.insertAdjacentHTML('beforeend', `
      <li>${key}</li>
    `);

    if (Object.keys(data[key]).length > 0) {
      return createTree(
        parentElement.firstElementChild.children[i],
        data[key]);
    }
  });
}

createTree(tree, food);
