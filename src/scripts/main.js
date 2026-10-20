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

tree.setAttribute('id', 'tree');

document.body.append(tree);

function createTree(element, data) {
  // WRITE YOUR CODE HERE
  if (Object.keys(data).length === 0) {
    return;
  }

  const newList = document.createElement('ul');

  for (const key of Object.keys(data)) {
    const newLi = document.createElement('li');

    newLi.textContent = key;
    newList.append(newLi);

    if (Object.keys(data[key]).length !== 0) {
      createTree(newLi, data[key]);
    }
  }

  element.append(newList);
}

createTree(tree, food);
