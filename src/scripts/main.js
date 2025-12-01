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
  for (const key in data) {
    const li = document.createElement('li');

    li.textContent = key;
    element.append(li);

    if (data[key] && Object.keys(data[key]).length > 0) {
      const ul = document.createElement('ul');

      li.append(ul);
      createTree(ul, data[key]);
    }
  }
}

createTree(tree, food);
