'use strict';

const food = {
  Drink: { Wine: {}, Schnaps: {} },

  Fruit: {
    Red: { Cherry: {}, Strawberry: {} },
    Yellow: { Banana: {}, Pineapple: {} },
  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  if (Object.keys(data).length === 0) {
    return;
  }

  for (const subitem in data) {
    const listItem = document.createElement('li');

    listItem.textContent = subitem;

    const subList = document.createElement('ul');

    createTree(subList, data[subitem]);

    listItem.append(subList);
    element.append(listItem);
  }
}

createTree(tree, food);
