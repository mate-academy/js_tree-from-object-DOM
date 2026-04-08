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


function createTree(container, obj) {
  const ul = document.createElement('ul');

  for (const key in obj) {
    const li = document.createElement('li');
    li.textContent = key;

    const children = obj[key];

    if (Object.keys(children).length) {
      const childTree = createTree(null, children);
      li.append(childTree);
    }

    ul.append(li);
  }

  if (container) {
    container.append(ul);
  }

  return ul;
}

const tree = document.querySelector('#tree');

createTree(tree, food);
