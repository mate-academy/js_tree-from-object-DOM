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

  const li = function creator(innerList, obj) {
    for (const key in obj) {
      const item = document.createElement('li');

      item.className = key;
      item.innerHTML = key;
      innerList.append(item);

      if (obj[key] !== {}) {
        const newList = document.createElement('ul');

        item.append(newList);
        creator(newList, obj[key]);
      }
    }
  };

  li(list, data);
}

createTree(tree, food);
