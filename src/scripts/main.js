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
  for (const [key, value] of Object.entries(data)) {
    const listItemElement = document.createElement('li');

    listItemElement.textContent = key;

    element.append(listItemElement);

    const isObject =
      Object.prototype.toString.call(value) === '[object Object]';

    if (isObject && Object.keys(value).length > 0) {
      const listElement = document.createElement('ul');

      createTree(listElement, value);

      listItemElement.append(listElement);
    }
  }
}

createTree(tree, food);
