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
  const object = data;
  const list = document.createElement('ul');

  element.append(list);

  const listItems = Object.keys(object);

  for (const item of listItems) {
    const listItem = document.createElement('li');

    listItem.innerHTML = item;
    list.append(listItem);

    if (typeof object[item] === 'object'
     && Object.keys(object[item]).length > 0) {
      createTree(listItem, object[item]);
    }
  }
}

createTree(tree, food);
