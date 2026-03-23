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

const ul = document.createElement('ul');

ul.setAttribute('id', 'tree');
document.body.append(ul);

const tree = document.querySelector('#tree');

function createTree(element, data) {
  // WRITE YOUR CODE HERE

  for (const articel in data) {
    const li = document.createElement('li');

    li.textContent = articel;
    element.append(li);

    if (
      typeof data[articel] === 'object' &&
      data[articel] !== null &&
      Object.keys(data[articel]).length > 0
    ) {
      const innerUl = document.createElement('ul');

      li.append(innerUl);
      createTree(innerUl, data[articel]);
    }
  }
}

createTree(tree, food);
