/* eslint-disable padding-line-between-statements */
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

const treeList = document.createElement('div');
treeList.id = 'tree';
document.body.appendChild(treeList);

const tree = document.querySelector('#tree');

function createTree(element, data) {
  // WRITE YOUR CODE HERE
  if (Object.keys(data).length === 0) {
    return undefined;
  } else {
    const ul = document.createElement('ul');
    element.appendChild(ul);
    for (const key of Object.keys(data)) {
      const curLi = document.createElement('li');
      ul.appendChild(curLi);
      curLi.textContent = key;
      createTree(curLi, data[key]);
    }
  }
}

createTree(tree, food);
