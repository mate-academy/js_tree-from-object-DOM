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
  const ul = document.createElement('ul');

  element.append(ul);

  for (const key in data) {
    const keys = [];

    keys.push(key);

    for (const ch of keys) {
      const li = document.createElement('li');

      li.textContent = ch;

      ul.append(li);

      createTree(li, data[ch]);
    }
  }
}

createTree(tree, food);
