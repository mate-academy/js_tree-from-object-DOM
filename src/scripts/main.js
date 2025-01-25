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

document.body.prepend(document.createElement('ul'));

document.body.firstElementChild.id = 'tree';

const tree = document.querySelector('#tree');

function createTree(element, data) {
  for (const key in data) {
    const newList = document.createElement('li');

    element.append(newList);
    newList.textContent = key;

    if (Object.keys(data[key]).length > 0) {
      const nestedList = document.createElement('ul');

      newList.append(nestedList);

      createTree(nestedList, data[key]);
    }
  }
}

createTree(tree, food);
