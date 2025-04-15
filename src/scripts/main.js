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
  function createList(obj) {
    const ulElement = document.createElement('ul');

    for (const key in obj) {
      const liElement = document.createElement('li');

      liElement.textContent = key;
      ulElement.append(liElement);

      if (Object.keys(obj[key]).length > 0) {
        liElement.append(createList(obj[key]));
      }
    }

    return ulElement;
  }

  element.append(createList(data));
}

createTree(tree, food);
