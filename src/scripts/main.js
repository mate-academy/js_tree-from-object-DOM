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
  const list = document.createElement('ul');
  const items = Object.keys(obj);

  for (const item of items) {
    const li = document.createElement('li');

    li.innerText = item;

    const subItems = obj[item];

    if (Object.values(subItems).length > 0) {
      const ul = generateListFrom(subItems);

      li.insertAdjacentElement('beforeend', ul);
    }

    list.insertAdjacentElement('beforeend', li);
  }

  return list;
}

function createTree(element, data) {
  const list = generateListFrom(data);

  element.insertAdjacentElement('beforeend', list);
}

createTree(tree, food);
