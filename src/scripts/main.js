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

div.id = 'tree';
document.body.appendChild(div);

const tree = document.querySelector('#tree');

function createTree(element, data) {
  const createUl = document.createElement('ul');

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const createLi = document.createElement('li');

      createLi.textContent = key;

      if (typeof data[key] === 'object' && Object.keys(data[key]).length > 0) {
        const nestedUl = createTree(null, data[key]);

        createLi.appendChild(nestedUl);
      }

      createUl.appendChild(createLi);
    }
  }

  if (element) {
    element.appendChild(createUl);
  }

  return createUl;
}

createTree(tree, food);
