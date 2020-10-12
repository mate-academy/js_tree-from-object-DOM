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
  if (Object.values(data).length > 0) {
    const list = document.createElement('ul');

    element.append(list);

    for (const key in data) {
      const listLi = document.createElement('li');

      listLi.textContent = key;

      list.append(listLi);
      createTree(listLi, data[key]);
    }
  }
}

createTree(tree, food);
