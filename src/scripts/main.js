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

  Object.keys(data).forEach(item => {
    const listItem = document.createElement('li');

    listItem.innerText = item;
    list.append(listItem);

    if (Object.keys(data[item]).length !== 0) {
      createTree(listItem, data[item]);
    }
  });

  element.append(list);
}

createTree(tree, food);
