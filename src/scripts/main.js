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
  if (!data) {
    return element;
  }

  const list = document.createElement('ul');

  for (const [key, value] of Object.entries(data)) {
    const li = document.createElement('li');

    li.textContent = key;

    createTree(li, value);

    list.append(li);
  }

  element.append(list);

  return list;
}

createTree(tree, food);
