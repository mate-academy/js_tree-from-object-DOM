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

  for (const key in data) {
    if (Object.keys(data[key]).length > 0) {
      const el = document.createElement('ul');

      createTree(el, data[key]);

      element.children[0].insertAdjacentHTML('beforeend',
        `<li>${key} ${el.innerHTML}</li>`);
    } else {
      element.children[0].insertAdjacentHTML('beforeend', `<li>${key}</li>`);
    }
  }
}

createTree(tree, food);
