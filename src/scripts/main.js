'use strict';

const food = {
  Drink: {
    Wine: {},
    Schnaps: {},
  },

  Fruit: {
    Red: {
      Cherry: {},
      Strawberry: {},
    },
    Yellow: {
      Banana: {},
      Pineapple: {},
    },
  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  const listWrapper = document.createElement('ul');

  for (const key in data) {
    const listItem = document.createElement('li');
    const listItemContent = data[key];

    listItem.textContent = key;

    if (hasNestedElements(listItemContent)) {
      createTree(listItem, listItemContent);
    }

    listWrapper.append(listItem);
  }

  element.append(listWrapper);
}

function hasNestedElements(value) {
  if (typeof value === 'object' && value !== null) {
    return Object.keys(value).length > 0;
  }

  return false;
}

createTree(tree, food);
