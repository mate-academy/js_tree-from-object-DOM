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
  if (!element || typeof data !== 'object') {
    return;
  }

  element.innerHTML = '';

  function buildList(obj) {
    const ul = document.createElement('ul');

    for (const [key, children] of Object.entries(obj)) {
      const li = document.createElement('li');

      li.textContent = key;

      if (Object.keys(children).length) {
        li.append(buildList(children));
      }

      ul.append(li);
    }

    return ul;
  }

  element.append(buildList(data));
}

createTree(tree, food);
