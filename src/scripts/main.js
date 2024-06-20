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

function createListItems(parentElement, treeData) {
  for (const treeItem in treeData) {
    if (treeData.hasOwnProperty(treeItem)) {
      const listItem = document.createElement('li');

      listItem.textContent = treeItem;

      if (Object.keys(treeData[treeItem]).length > 0) {
        const nestedList = document.createElement('ul');

        listItem.appendChild(nestedList);
        createListItems(nestedList, treeData[treeItem]);
      }

      parentElement.appendChild(listItem);
    }
  }
}

function createTree(element, data) {
  const list = document.createElement('ul');

  list.id = 'tree';

  createListItems(list, data);

  document.body.appendChild(list);
}

createTree(tree, food);
