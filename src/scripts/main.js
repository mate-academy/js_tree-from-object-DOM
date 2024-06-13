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
    const listItem = document.createElement('li');

    listItem.append(key);

    if (Object.keys(value).length === 0) {
      element.appendChild(listItem);
    } else {
      const unorderedList = document.createElement('ul');

      createTree(unorderedList, value);

      listItem.appendChild(unorderedList);
      element.appendChild(listItem);
    }
  }
}

createTree(tree, food);
