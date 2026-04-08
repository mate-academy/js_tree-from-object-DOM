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
  if (!data || Object.keys(data).length === 0) {
    return
  }

  const ul = document.createElement('ul');
  const key = Object.keys(data);
  key.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;

    const value = data[item];
    if (typeof value === 'object' && value !== null && Object.keys(value).length > 0) {
      createTree(li, value);
    }
    ul.appendChild(li)
  });
  element.appendChild(ul);
}

createTree(tree, food);
