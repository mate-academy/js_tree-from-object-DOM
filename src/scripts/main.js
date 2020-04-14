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

  for (const el in data) {
    const listElement = document.createElement('li');

    listElement.innerText = el;
    list.append(listElement);

    if (Object.keys(data[el]).length !== 0) {
      createTree(listElement, data[el]);
    }
  }
}

createTree(tree, food);
