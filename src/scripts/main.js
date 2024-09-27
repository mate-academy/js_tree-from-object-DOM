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
  let treeCreated = false;

  function recursiveCreateTree(htmlElement, dataObj) {
    const list = document.createElement('ul');

    if (!treeCreated) {
      list.setAttribute('id', 'tree');
      treeCreated = true;
    }

    const dataItems = Object.entries(dataObj);

    dataItems.forEach((entry) => {
      const item = document.createElement('li');
      const [key, value] = entry;
      const nestedChildren = Object.entries(value);

      item.innerText = key;

      if (nestedChildren && nestedChildren.length > 0) {
        recursiveCreateTree(item, value);
      }
      list.append(item);
    });

    if (list.hasAttribute('id')) {
      document.querySelector('body').append(list);
    } else {
      htmlElement.append(list);
    }
  }
  recursiveCreateTree(element, data);
}

createTree(tree, food);
