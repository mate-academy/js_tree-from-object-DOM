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
  const list = document.createElement('ul');
  const dataKeys = Object.keys(data);

  dataKeys.forEach(item => {
    const listItem = document.createElement('li');

    listItem.textContent = item;
    list.append(listItem);

    createTree(listItem, data[item]);
  });

  element.append(list);
}

createTree(tree, food);
