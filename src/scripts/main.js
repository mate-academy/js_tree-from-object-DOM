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

document.body.id = 'tree';

const tree = document.querySelector('#tree');

function createTree(element, data) {
  if (!Object.keys(data).length) {
    return;
  }

  const fragment = document.createDocumentFragment();

  function buildTree(obj) {
    if (!Object.keys(obj).length) {
      return;
    }

    const ul = document.createElement('ul');

    for (const key in obj) {
      const li = document.createElement('li');

      li.textContent = key;

      const nestedUl = buildTree(obj[key]);

      if (nestedUl) {
        li.append(nestedUl);
      }

      ul.append(li);
    }

    return ul;
  }

  fragment.append(buildTree(data));
  element.append(fragment);
}

createTree(tree, food);
