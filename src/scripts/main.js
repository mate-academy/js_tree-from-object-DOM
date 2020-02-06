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

  element.append(list);

  for (const item of Object.keys(data)) {
    const listItem = document.createElement('li');

    listItem.innerHTML = item;
    list.append(listItem);

    if (Object.values(data[item]).length) {
      createTree(listItem, data[item]);
    }
  }
}

createTree(tree, food);
