'use strict';

const food = {
  Drink: {
    Wine: {},
    Schnaps: {},
  },
  Fruit: {
    Red: { Cherry: {}, Strawberry: {} },
    Yellow: { Banana: {}, Pineapple: {} },
  },
};

function createTree(element, data) {
  if (!data || typeof data !== 'object') {
    return;
  }

  element.innerHTML = '';

  const ul = document.createElement('ul');

  Object.keys(data).forEach((key) => {
    const li = document.createElement('li');

    li.textContent = key;

    if (
      data[key] &&
      typeof data[key] === 'object' &&
      Object.keys(data[key]).length > 0
    ) {
      createTree(li, data[key]);
    }

    ul.appendChild(li);
  });

  element.appendChild(ul);
}

window.createTree = createTree;

document.addEventListener('DOMContentLoaded', () => {
  const tree = document.querySelector('#tree');

  if (tree) {
    createTree(tree, food);
  }
});
