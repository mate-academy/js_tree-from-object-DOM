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

const tree = document.querySelector('body');

function createTree(element, data) {
  for (const key in data) {
    const ul = document.createElement('ul');
    const li = document.createElement('li');

    li.textContent = key;

    if (Object.keys(data[key]).length) {
      element.append(li);
      element.append(ul);

      createTree(element.lastElementChild, data[key]);
    } else {
      element.append(li);
    }
  }
}

createTree(tree, food);
