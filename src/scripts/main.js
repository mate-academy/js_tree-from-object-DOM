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
  const newList = document.createElement('ul');

  Object.keys(data).forEach(item => {
    const newItem = document.createElement('li');

    newItem.innerText = item;
    newList.append(newItem);

    if (Object.keys(data[item]).length !== 0) {
      createTree(newItem, data[item]);
    }
  });

  element.append(newList);
}

createTree(tree, food);
