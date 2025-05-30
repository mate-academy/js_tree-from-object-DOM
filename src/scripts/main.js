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
document.body.append(tree);

function createTree(element, data) {
  const ul = document.createElement('ul');
  const keys = Object.keys(data);

  if (keys.length === 0) {
    return;
  }

  keys.forEach((key) => {
    const li = document.createElement('li');

    li.textContent = key;

    createTree(li, data[key]);

    ul.append(li);
  });

  element.append(ul);
}

createTree(tree, food);
