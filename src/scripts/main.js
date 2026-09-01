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

const container = document.createElement('div');

document.body.appendChild(container).setAttribute('id', 'tree');

const tree = document.querySelector('#tree');

function createTree(element, data) {
  const ul = document.createElement('ul');

  for (const item in data) {
    const li = document.createElement('li');

    li.textContent = item;

    if (typeof data[item] === 'object') {
      const nestedUl = createTree(ul, data[item]);

      li.appendChild(nestedUl);
    }
    ul.appendChild(li);
  }

  return element.appendChild(ul);
}

createTree(tree, food);
