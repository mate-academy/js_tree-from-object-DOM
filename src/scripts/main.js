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
  element.append(createTreeDom(data));
}

function createTreeDom(object) {
  if (!Object.keys(object).length) {
    return;
  }

  const ul = document.createElement('ul');

  for (const key in object) {
    const li = document.createElement('li');

    li.innerHTML = key;

    const childrenUL = createTreeDom(object[key]);

    if (childrenUL) {
      li.append(childrenUL);
    }

    ul.append(li);
  }

  return ul;
}

createTree(tree, food);
