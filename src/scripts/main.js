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

function createTree(element, data, depth = 0) {
  for (const item in data) {
    const li = document.createElement('li');

    li.textContent = item;
    element.appendChild(li);

    // Only create nested <ul> elements if the current depth is less than 2
    if (depth < 2 && Object.keys(data[item]).length > 0) {
      const ul = document.createElement('ul');

      li.appendChild(ul);
      createTree(ul, data[item], depth + 1);
    }
  }
}

createTree(tree, food);
