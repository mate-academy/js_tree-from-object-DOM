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

function createUl(item) {
  return document.createElement('ul');
}

function createLi(item) {
  const li = document.createElement('li');

  li.textContent = item;

  return li;
}

function createTree(element, data) {
  const ul = createUl();
  const arr = Object.entries(data);

  arr.forEach(([key, value]) => {
    const li = createLi(key);

    ul.appendChild(li);

    if (Object.keys(value).length > 0) {
      createTree(li, value);
    }
  });

  element.appendChild(ul);
}

createTree(tree, food);
