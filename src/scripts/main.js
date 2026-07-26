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

const div = document.createElement('div');

div.setAttribute('id', 'tree');

document.body.prepend(div);

const tree = document.querySelector('#tree');

function createTree(element, data) {
  const ul = document.createElement('ul');

  element.append(ul);

  for (const key in data) {
    const li = document.createElement('li');

    li.textContent = key;

    ul.append(li);

    if (Object.keys(data[key]).length > 0) {
      createTree(li, data[key]);
    }
  }
}

createTree(tree, food);
