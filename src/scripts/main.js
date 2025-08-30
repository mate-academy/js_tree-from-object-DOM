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

const tree = document.querySelector('div');

tree.setAttribute('id', 'tree');
document.body.append(tree);

function createTree(element, data) {
  if (!data || Object.keys(data).length <= 0) {
    return;
  }

  const ul = document.createElement('ul');

  for (const key in data) {
    const li = document.createElement('li');

    li.textContent = key;

    if (typeof data[key] === 'object' && Object.keys(data[key]).length > 0) {
      createTree(li, data[key]);
    }

    ul.append(li);
  }

  element.append(ul);
}

createTree(tree, food);
