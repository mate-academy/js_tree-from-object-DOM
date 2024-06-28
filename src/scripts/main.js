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

const tree = document.getElementsByTagName('body')[0];

function createTree(element, data) {
  const mainTree = element;
  const ul = document.createElement('ul');

  const treeUl = mainTree.appendChild(ul);

  for (const key of Object.keys(data)) {
    const li = document.createElement('li');

    li.textContent = key;

    treeUl.appendChild(li);
    createTree(li, data[key]);
  }

  return mainTree;
}

tree.append(createTree(tree, food));
