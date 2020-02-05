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

  const listItems = Object.keys(data);

  for (const item of listItems) {
    const listItem = document.createElement('li');

    listItem.innerHTML = item;
    list.append(listItem);

    if (typeof data[item] === 'object'
     && Object.keys(data[item]).length > 0) {
      createTree(listItem, data[item]);
    }
  }
}

createTree(tree, food);
