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
  const keys = Object.keys(data);

  if (keys.length) {
    element.insertAdjacentHTML('beforeend', `
      <ul></ul>
    `);

    const ulElement = element.lastElementChild;

    for (const key of keys) {
      ulElement.insertAdjacentHTML('beforeend', `
      <li>${key}</li>
      `);

      if (data[key] !== {}) {
        const liElement = ulElement.lastElementChild;

        createTree(liElement, data[key]);
      }
    }
  }
}

createTree(tree, food);
