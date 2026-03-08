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

// const tree = document.querySelector('#tree');

const tree = document.createElement('div');

tree.id = 'tree';

function createTree(element, data) {
  if (Object.keys(data).length === 0) {
    return;
  }

  const ul = document.createElement('ul');

  for (const key of Object.keys(data)) {
    const li = document.createElement('li');

    li.textContent = key;
    createTree(li, data[key]);

    ul.append(li);
  }
  element.append(ul);
}
document.body.append(tree);
createTree(tree, food);
