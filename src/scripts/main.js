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
  const ul = document.createElement('ul');

  for (const char of Object.keys(data)) {
    const li = document.createElement('li');

    li.textContent = char;

    if (
      typeof data[char] === 'object' &&
      data[char] !== null &&
      Object.keys(data[char]).length > 0
    ) {
      createTree(li, data[char]);
    }

    ul.append(li);
  }

  element.append(ul);
}

createTree(tree, food);
