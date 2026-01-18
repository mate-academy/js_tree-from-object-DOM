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

function createTree(element, data) {
  const rootUl = document.createElement('ul');

  function createBranch(parentUl, obj) {
    for (const key of Object.keys(obj)) {
      const li = document.createElement('li');
      li.textContent = key;
      parentUl.appendChild(li);

      if (Object.keys(obj[key]).length > 0) {
        const ul = document.createElement('ul');
        li.appendChild(ul);
        createBranch(ul, obj[key]);
      }
    }
  }

    createBranch(rootUl, data);
    element.appendChild(rootUl);
}

document.addEventListener('DOMContentLoaded', () => {
  const tree = document.querySelector('#tree');
  createTree(tree, food);
});
