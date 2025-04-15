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
  // WRITE YOUR CODE HERE
  const container = element || document.createElement('div');

  container.id = 'tree';
  document.body.appendChild(container);

  function listCreater(object) {
    const newList = document.createElement('ul');

    for (const key in object) {
      const newListItem = document.createElement('li');

      newListItem.textContent = key;
      newList.appendChild(newListItem);

      const innerObject = object[key];
      const innerObjKeys = Object.keys(innerObject);

      if (typeof innerObject === 'object' && innerObjKeys.length) {
        const innerList = listCreater(innerObject);

        newListItem.appendChild(innerList);
      }
    }

    return newList;
  }

  const finalList = listCreater(data);

  container.appendChild(finalList);
}

createTree(tree, food);
