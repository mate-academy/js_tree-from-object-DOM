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
  let ul;

  if (element.tagName !== 'UL') {
    ul = document.createElement('ul');
    element.append(ul);
  } else {
    ul = element;
  }

  for (const key in data) {
    const listItem = document.createElement('li');

    listItem.textContent = key;

    if (
      typeof data[key] === 'object' &&
      data[key] !== null &&
      Object.keys(data[key]).length > 0
    ) {
      const nestedUl = document.createElement('ul');

      listItem.append(nestedUl);
      createTree(nestedUl, data[key]);
    }

    ul.append(listItem);
  }
}

createTree(tree, food);
