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
  // WRITE YOUR CODE HERE
  const list = document.createElement('ul');

  for (const key in data) {
    const item = document.createElement('li');

    item.textContent = key;

    const value = data[key];

    if (typeof value === 'object' && Object.keys(value).length > 0) {
      const nestedList = createTree(document.createElement('ul'), value);

      item.append(nestedList);
    }
    list.append(item);
  }
  element.append(list);

  return list;
}

createTree(tree, food);
