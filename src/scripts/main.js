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

const div = document.createElement('div');

div.id = 'tree';
document.body.append(div);

const tree = document.querySelector('#tree');

function createTree(element, data) {
  if (Object.keys(data).length === 0) {
    return;
  }

  const ul = document.createElement('ul');

  element.append(ul);

  Object.entries(data).forEach(([key, value]) => {
    const li = document.createElement('li');

    ul.append(li);
    li.textContent = key;

    createTree(li, value);
  });
}

createTree(tree, food);
