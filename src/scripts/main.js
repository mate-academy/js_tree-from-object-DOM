'use strict';

const foodData = {
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

function ensureTreeHost() {
  let host = document.querySelector('#tree');

  if (!host) {
    host = document.createElement('div');
    host.id = 'tree';
    document.body.prepend(host);
  }

  return host;
}

function createTree(rootEl, obj) {
  const ul = document.createElement('ul');

  for (const key in obj) {
    const li = document.createElement('li');

    li.textContent = key;

    if (Object.keys(obj[key]).length) {
      createTree(li, obj[key]);
    }
    ul.appendChild(li);
  }
  rootEl.appendChild(ul);
}

const rootContainer = ensureTreeHost();

createTree(rootContainer, foodData);
