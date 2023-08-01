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
const treeList = document.createElement('ul');

tree.append(treeList);

function createTree(element, data) {
  for (const key in data) {
    const li = document.createElement('li');

    li.innerHTML = key;

    if (Object.keys(data[key]).length > 0) {
      const ul = document.createElement('ul');

      li.append(ul);
      createTree(ul, data[key]);
    }

    element.append(li);
  }
}

createTree(treeList, food);
