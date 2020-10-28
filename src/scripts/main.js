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

  Object.keys(data).forEach(key => {
    const listElement = document.createElement('li');

    listElement.textContent = key;
    list.append(listElement);

    if (Object.keys(data[key])) {
      createTree(listElement, data[key]);
    }
  });
}

createTree(tree, food);
