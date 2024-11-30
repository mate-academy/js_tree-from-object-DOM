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

  for (const key in data) {
    const newData = data[key];
    const li = document.createElement('li');

    li.textContent = key;
    ul.append(li);

    if (Object.keys(newData).length) {
      createTree(li, newData);
    }
  }

  element.append(ul);
}

createTree(tree, food);
