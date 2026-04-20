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

const tree = document.createElement('div');

tree.id = 'tree';
document.body.appendChild(tree);

function createTree(element, data) {
  const list = document.createElement('ul');

  element.appendChild(list);

  for (const entry of Object.entries(data)) {
    const listItem = document.createElement('li');

    listItem.textContent = entry[0];
    list.appendChild(listItem);

    if (Object.keys(entry[1]).length > 0) {
      const newUl = document.createElement('ul');

      element.appendChild(newUl);
      createTree(listItem, entry[1]);
    }
  }
}

createTree(tree, food);
