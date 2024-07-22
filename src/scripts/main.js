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

const container = document.createElement('div');

container.setAttribute('id', 'tree');
document.body.append(container);

const tree = document.querySelector('#tree');

function createTree(treeElement, obj) {
  if (!Object.entries(obj).length) {
    return;
  }

  const ul = document.createElement('ul');

  treeElement.append(ul);

  for (const key in obj) {
    const li = document.createElement('li');

    li.innerText = key;
    ul.append(li);

    createTree(li, obj[key]);
  }
}

createTree(tree, food);
