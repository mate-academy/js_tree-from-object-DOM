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
  const newUl = document.createElement('ul');

  element.append(newUl);

  for (const key in data) {
    const newLi = document.createElement('li');

    newLi.textContent = key;
    newUl.append(newLi);

    if (Object.values(data[key]).length > 0) {
      createTree(newLi, data[key]);
    };
  };
};
createTree(tree, food);
