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

const newTree = document.createElement('div');

newTree.setAttribute('id', 'tree');

document.body.prepend(newTree);

const tree = document.querySelector('#tree');

function createTree(element, data) {
  const list = document.createElement('ul');

  element.append(list);

  for (const key in data) {
    const item = document.createElement('li');

    item.textContent = key;
    list.append(item);

    if (Object.keys(data[key]).length > 0) {
      createTree(item, data[key]);
    }
  }
}

createTree(tree, food);
