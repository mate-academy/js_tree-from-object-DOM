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

  element.append(ul);

  for (const x in data) {
    const li = document.createElement('li');

    li.textContent = x;

    ul.append(li);

    if (Object.values(data[x])) {
      createTree(li, data[x]);
    };
  };
}

createTree(tree, food);
