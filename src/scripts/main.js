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

const tree = document.createElement('div');

tree.id = 'tree';

function createTree(element, data) {
  const ul = document.createElement('ul');

  for (const key in data) {
    const li = document.createElement('li');

    li.textContent = key;
    ul.appendChild(li);

    if (Object.keys(data[key]).length > 0) {
      createTree(li, data[key]);
    }
  }
  element.appendChild(ul);
}

document.body.appendChild(tree);
createTree(tree, food);
