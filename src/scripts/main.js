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

const rootTree = document.createElement('ul');

rootTree.id = 'tree';
document.body.append(rootTree);

const tree = document.querySelector('#tree');

function createTree(element, data) {
  for (const key in data) {
    const firstList = document.createElement('li');

    firstList.textContent = key;

    element.append(firstList);

    const testLength = Object.keys(data[key]).length;

    if (testLength > 0) {
      const ul = document.createElement('ul');

      firstList.append(ul);

      createTree(ul, data[key]);
    }
  }
}

createTree(tree, food);
