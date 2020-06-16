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

  Object.keys(data).forEach(key => {
    const item = document.createElement('li');

    item.textContent = key;
    list.append(item);

    if (Object.keys(data[key]).length) {
      createTree(item, data[key]);
    }
  });

  element.append(list);
}

createTree(tree, food);
