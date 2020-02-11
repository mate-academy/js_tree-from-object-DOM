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
  const listKeys = Object.keys(data);

  if (listKeys.length > 0) {
    const list = document.createElement('ul');

    element.append(list);

    listKeys.forEach(el => {
      const item = document.createElement('li');

      item.textContent = el;

      list.append(item);

      if (Object.keys(el).length > 0) {
        createTree(item, data[el]);
      }
    });
  }
}

createTree(tree, food);
