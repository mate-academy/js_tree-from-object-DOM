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

const el = document.createElement('div');

el.setAttribute('id', 'tree');

document.body.append(el);

const tree = document.querySelector('#tree');

function createTree(element, data) {
  const list = document.createElement('ul');

  for (const key in data) {
    const listItem = document.createElement('li');

    listItem.textContent = key;

    if (typeof data[key] === 'object' && data[key] !== null) {
      createTree(listItem, data[key]);
    }

    list.append(listItem);
  }

  if (list.children.length > 0) {
    element.append(list);
  }
}

createTree(tree, food);
