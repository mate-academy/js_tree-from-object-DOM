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
  // WRITE YOUR CODE HERE
  if (!data || Object.keys(data).length === 0) {
    return null;
  }

  const ul = document.createElement('ul');

  for (const key of Object.keys(data)) {
    const li = document.createElement('li');

    li.textContent = key;

    const childUl = createTree(null, data[key]);

    if (childUl) {
      li.append(childUl);
    }

    ul.append(li);
  }

  if (element) {
    element.append(ul);

    return;
  }

  return ul;
}

createTree(tree, food);
