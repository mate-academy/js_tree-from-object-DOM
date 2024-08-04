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

  element.append(ul);

  for (const key in data) {
    const li = document.createElement('li');

    li.textContent = key;

    if (Object.keys(data[key]).length) {
      element.lastElementChild.append(li);

      createTree(element.lastElementChild.lastElementChild, data[key]);
    } else {
      element.lastElementChild.append(li);
    }
  }
}

createTree(tree, food);
