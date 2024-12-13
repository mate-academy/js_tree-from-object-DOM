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
  if (element) {
    for (const key of Object.keys(data)) {
      const newRow = document.createElement('li');

      newRow.textContent = key;
      newRow.append(createTree(null, data[key]));
      element.append(newRow);
    }

    return element;
  } else {
    const newUl = document.createElement('ul');

    return createTree(newUl, data);
  }
}

document.body.append(createTree(tree, food));
