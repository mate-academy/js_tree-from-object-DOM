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
  if (Object.keys(data).length === 0) {
    const li = document.createElement('li');

    li.textContent = data;
  } else {
    const ul = document.createElement('ul');

    element.append(ul);

    for (const elem in data) {
      const li = document.createElement('li');

      li.textContent = elem;
      ul.append(li);

      createTree(li, data[elem]);
    }
  }
}

createTree(tree, food);
