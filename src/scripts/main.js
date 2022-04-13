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

function generateListFrom(obj) {
  const keys = Object.keys(obj);

  if (keys.length === 0) {
    return '';
  }

  const list = document.createElement('ul');

  for (const key of keys) {
    const item = document.createElement('li');

    item.textContent = key;
    item.append(generateListFrom(obj[key]));

    list.append(item);
  }

  return list;
}

function createTree(element, data) {
  const list = generateListFrom(data);

  element.insertAdjacentElement('beforeend', list);
}

createTree(tree, food);
