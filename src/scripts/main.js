'use strict';

const food = {
  'Meat': {
    'Pork': {},
    'Beef': {},
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
  if (Object.keys(data).length) {
    element.insertAdjacentHTML('beforeend', `<ul></ul>`);

    const list = element.querySelectorAll('ul');
    const ul = list[list.length - 1];

    for (const li in data) {
      ul.insertAdjacentHTML('beforeend', `<li>${li}</li>`);
      createTree(ul, data[li]);
    }
  }
}

createTree(tree, food);
