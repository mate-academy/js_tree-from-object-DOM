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
  let list;

  if (Object.keys(data).length) {
    list = document.createElement('ul');
    element.append(list);
  }

  for (const key in data) {
    if (Object.keys(data).length) {
      const listInList = document.createElement('li');

      listInList.textContent = key;

      list.append(listInList);
      createTree(listInList, data[key]);
    } else {
      const listItem = document.createElement('li');

      listItem.textContent = data[key];

      element.append(listItem);
    }
  }
}

createTree(tree, food);
