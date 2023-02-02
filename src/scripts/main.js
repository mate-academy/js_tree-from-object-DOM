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

  for (const d in data) {
    list.insertAdjacentHTML('beforeend', `<li>${d}</li>`);

    const listInside = list.lastChild;

    if (Object.keys(data[d]).length !== 0) {
      createTree(listInside, data[d]);
    }
  }
}

createTree(tree, food);
