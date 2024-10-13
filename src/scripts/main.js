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

const treeDiv = document.createElement('div');

treeDiv.id = 'tree';
document.body.appendChild(treeDiv);

const tree = document.querySelector('#tree');

function createListElement(key) {
  const li = document.createElement('li');

  li.textContent = key;

  return li;
}

function createList() {
  return document.createElement('ul');
}

function createTree(element = document.body, data = {}) {
  if (Object.entries(data).length === 0) {
    return;
  }

  const ul = createList();

  for (const [key, value] of Object.entries(data)) {
    const li = createListElement(key);

    if (
      value &&
      typeof value === 'object' &&
      Object.entries(value).length > 0
    ) {
      createTree(li, value);
    }
    ul.appendChild(li);
  }

  element.appendChild(ul);
}

createTree(tree, food);
