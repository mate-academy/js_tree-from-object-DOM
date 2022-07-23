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
  const template = createBranch(data);

  element.insertAdjacentHTML('beforeend', template);
}

function createBranch(obj) {
  let treeBlock = '';
  const openEl = '<ul>';
  const closeListTag = '</ul>';

  for (const item in obj) {
    let element = `<li>${item}</li>`;

    if (typeof obj[item] === 'object') {
      const newUlEl = createBranch(obj[item]);

      element = `<li>${item}${newUlEl}</li>`;
    }
    treeBlock += element;
  }

  return openEl + treeBlock + closeListTag;
}

createTree(tree, food);
