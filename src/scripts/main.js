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
  element.append(createList(data));
}

function createList(object) {
  if (!Object.keys(object).length) {
    return;
  }

  const ul = document.createElement('ul');

  for (const key in object) {
    const li = document.createElement('li');

    li.innerHTML = key;

    const childUl = createList(object[key]);

    if (childUl) {
      li.append(childUl);
    }

    ul.append(li);
  }

  return ul;
}

createTree(tree, food);
