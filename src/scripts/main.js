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

const body = document.querySelector('body');
const tree = document.createElement('ul');

tree.setAttribute('id', 'tree');
body.prepend(tree);

function createTree(element, data) {
  const fragment = new DocumentFragment();
  const keys = Object.keys(data);

  keys.forEach((key) => {
    const li = document.createElement('li');

    li.innerText = key;

    if (Object.keys(data[key]).length) {
      const ul = document.createElement('ul');

      createTree(ul, data[key]);
      li.append(ul);
    }
    fragment.append(li);
  });
  element.append(fragment);
}

createTree(tree, food);
