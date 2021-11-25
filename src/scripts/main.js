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
  const dataKeys = Object.keys(data);
  const list = document.createElement('ul');

  if (dataKeys.length) {
    element.append(list);
  }

  dataKeys.forEach(item => {
    const listItem = document.createElement('li');

    listItem.textContent = `${item}`;
    list.append(listItem);

    if (data[item]) {
      createTree(listItem, data[item]);
    }
  });
}

createTree(tree, food);
