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
  if (
    typeof data === 'object' &&
    data !== null &&
    Object.keys(data).length > 0
  ) {
    const ul1 = document.createElement('ul');

    element.append(ul1);

    for (const key in data) {
      const li1 = document.createElement('li');

      li1.textContent = key;
      ul1.append(li1);

      if (typeof data[key] === 'object' && data[key] !== null) {
        createTree(li1, data[key]);
      }
    }
  }
}

createTree(tree, food);
