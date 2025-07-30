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
  const ul = document.createElement('ul');

  Object.keys(data).forEach((el) => {
    const li = document.createElement('li');

    li.textContent = el;
    ul.appendChild(li);

    if (typeof data[el] === 'object' && Object.keys(data[el]).length > 0) {
      createTree(li, data[el]);
    }
  });

  element.appendChild(ul);
}

createTree(tree, food);
