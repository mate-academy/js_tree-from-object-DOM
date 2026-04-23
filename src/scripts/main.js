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

function createTreeDom(obj) {
  if (!Object.keys(obj).length) {
    return;
  }

  const ul = document.createElement('ul');

  for (const key in obj) {
    const li = document.createElement('li');

    li.innerHTML = key;

    const childrenUl = createTreeDom(obj[key]);

    if (childrenUl) {
      li.append(childrenUl);
    }

    ul.append(li);
  }

  return ul;
}

function createTree(element, data) {
  element.append(createTreeDom(data));
}

createTree(tree, food);
