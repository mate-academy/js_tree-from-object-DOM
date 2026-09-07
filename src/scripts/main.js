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

const rootEl = document.createElement('div');

rootEl.setAttribute('id', 'tree');
document.body.append(rootEl);

const tree = document.querySelector('#tree');

function createTree(element, data) {
  if (Object.keys(data).length === 0) {
    return;
  }

  const list = document.createElement('ul');

  element.append(list);

  for (const key in data) {
    const li = document.createElement('li');

    li.textContent = key;
    list.append(li);

    createTree(li, data[key]);
  }
}

createTree(tree, food);
