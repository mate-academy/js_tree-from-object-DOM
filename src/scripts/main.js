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

const list = document.createElement('ul');

list.setAttribute('id', 'tree');
document.body.append(list);

const tree = document.querySelector('#tree');

function createTree(element, data) {
  for (const key in data) {
    const liElement = document.createElement('li');

    liElement.textContent = key;

    if (Object.keys(data[key]).length > 0) {
      const ulElement = document.createElement('ul');

      liElement.append(ulElement);

      createTree(ulElement, data[key]);
    }

    element.append(liElement);
  }
}

createTree(tree, food);
