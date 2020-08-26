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

  for (const key in data) {
    const listItem = document.createElement('li');

    listItem.textContent = key;
    list.append(listItem);

    if (typeof data[key] === 'object' && Object.keys(data[key]).length) {
      createTree(list, data[key]);
    }
  }

  if (element.lastElementChild) {
    element.lastElementChild.append(list);
  } else {
    element.append(list);
  }
}

createTree(tree, food);
