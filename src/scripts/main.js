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

  for (const oneObj in data) {
    if (Object.entries(data[oneObj]).length === 0) {
      element.lastElementChild.insertAdjacentHTML('beforeend', `
          <li>${oneObj}</li>
      `);
    } else {
      element.lastElementChild.insertAdjacentHTML('beforeend', `
        <li>
          ${oneObj}
        </li>
      `);
      createTree(element.lastElementChild.lastElementChild, data[oneObj]);
    }
  }
}

createTree(tree, food);
