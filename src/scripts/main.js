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
const div = document.createElement('div');
div.setAttribute('id', 'tree');
body.appendChild(div);

const tree = document.querySelector('#tree');

function createTree(element, data) {
  const ul = document.createElement('ul');

  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      const li = document.createElement('li');
      li.textContent = key;

      if (Object.keys(data[key]).length > 0) {
        createTree(li, data[key]);
      }

      ul.appendChild(li);
    }
  }

  element.appendChild(ul);
}

createTree(tree, food);
