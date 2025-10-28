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

function createTree(element, data) {
  const list = document.createElement('ul');

  if (Object.keys(data).length === 0) {
    return;
  }

  element.appendChild(list);

  for (const item in data) {
    const li = document.createElement('li');

    li.textContent = item;
    list.appendChild(li);

    if (typeof data[item] === 'object') {
      createTree(li, data[item]);
    }
  }
}

createTree(document.body, food);
