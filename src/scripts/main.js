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

const DEBUG = false;
const log = (...args) => {
  if (DEBUG) {
    // eslint-disable-next-line no-console
    console.log(...args);
  }
};

const createUl = (className) => {
  const ul = document.createElement('ul');

  if (className) {
    ul.classList.add(className);
  }

  return ul;
};
const createLi = (text) => {
  const li = document.createElement('li');

  li.textContent = text;

  return li;
};

const isNonEmptyObject = (value) =>
  typeof value === 'object' && value !== null && Object.keys(value).length > 0;

function createTree(element, data, className) {
  if (!element || !isNonEmptyObject(data)) {
    return;
  }

  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }

  const ul = renderSubtree(data, 0, className);

  if (ul) {
    element.appendChild(ul);
  }
}

function renderSubtree(data, depth = 0, className = '') {
  if (!isNonEmptyObject(data)) {
    return null;
  }

  const ul = createUl(className);

  Object.entries(data).forEach(([k, v]) => {
    const li = createLi(k);

    if (isNonEmptyObject(v)) {
      log(' '.repeat(depth * 2) + k);

      const childUl = renderSubtree(v, depth + 1);

      if (childUl) {
        li.appendChild(childUl);
      }
    }

    ul.appendChild(li);
  });

  return ul;
}

createTree(tree, food, 'tree');
