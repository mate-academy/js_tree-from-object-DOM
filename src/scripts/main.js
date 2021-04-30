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
  for (const key in data) {
    element.insertAdjacentHTML('beforeend', `<ul id=${key}></ul>`);

    const ul = element.querySelector(`#${key}`);

    ul.insertAdjacentHTML('beforeend', `<li>${key}</li>`);

    if (Object.keys(data[key]).length) {
      createTree(ul, data[key]);
    }
  }
}

createTree(tree, food);
