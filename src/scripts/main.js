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

function createTree(data) {
  const fragment = document.createDocumentFragment();
  const ul = document.createElement('ul');

  for (const key in data) {
    const li = document.createElement('li');

    li.textContent = key;
    ul.appendChild(li);

    if (
      Object.prototype.toString.call(data[key]) === '[object Object]' &&
      Object.keys(data[key]).length > 0
    ) {
      li.appendChild(createTree(data[key]));
    }
  }

  fragment.appendChild(ul);

  return fragment;
}

tree.appendChild(createTree(food));
