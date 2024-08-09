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
  element.append(createTreeDom(data));
}

function createTreeDom(data) {
  if (!Object.keys(data).length) {
    return;
  }

  const ul = document.createElement('ul');

  for (const key in data) {
    const li = document.createElement('li');

    li.innerHTML = key;

    const childerUl = createTreeDom(data[key]);

    if (childerUl) {
      li.append(childerUl);
    }
    ul.append(li);
  }

  return ul;
}
createTree(tree, food);
