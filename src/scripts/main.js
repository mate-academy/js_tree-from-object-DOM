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
  const list = document.createElement('ul');
  const items = Object.entries(data);

  items.forEach(item => {
    const nestedItems = item[1];
    const itemList = document.createElement('li');

    itemList.textContent = item[0];

    if (typeof nestedItems === 'object') {
      createTree(itemList, nestedItems);
    }

    list.append(itemList);
  });

  element.append(list);
}

createTree(tree, food);
