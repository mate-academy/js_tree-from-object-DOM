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
  element.insertAdjacentHTML('beforeend', `<ul></ul>`);

  const list = element.lastChild;

  for (const key in data) {
    list.insertAdjacentHTML('beforeend', `<li>${key}</li>`);

    const listInside = list.lastChild;

    if (Object.keys(data[key]).length) {
      createTree(listInside, data[key]);
    }
  }
}

createTree(tree, food);
