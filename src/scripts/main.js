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
  if (!element || !data) {
    return;
  }

  let ul;

  for (const key in data) {
    if (!ul) {
      ul = document.createElement('ul');
    }

    const li = document.createElement('li');

    li.textContent = key;

    if (Object.keys(data[key]).length > 0) {
      createTree(li, data[key]);
    }

    ul.append(li);
  }

  if (element) {
    element.append(ul);
  }
}

createTree(tree, food);
