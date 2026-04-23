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
  // WRITE YOUR CODE HERE
  const ul = document.createElement('ul');

  element.appendChild(ul);

  for (const item of Object.entries(data)) {
    const li = document.createElement('li');

    li.textContent = item[0];
    ul.appendChild(li);

    if (
      item[1] &&
      (typeof item[1] === 'object') & (Object.keys(item[1]).length > 0)
    ) {
      const nextUl = document.createElement('ul');

      element.appendChild(nextUl);
      createTree(li, item[1]);
    }
  }
}

createTree(tree, food);
