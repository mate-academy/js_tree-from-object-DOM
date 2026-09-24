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
  let cont = element;

  if (cont === null) {
    const body = document.querySelector('body');
    const div = document.createElement('div');

    div.setAttribute('id', 'tree');

    body.append(div);
    cont = document.querySelector('#tree');
  }

  const ul = document.createElement('ul');

  cont.append(ul);

  for (const key in data) {
    const li = document.createElement('li');

    li.textContent = key;
    ul.append(li);

    if (Object.keys(data[key]).length !== 0) {
      createTree(li, data[key]);
    }
  }
}

createTree(tree, food);
