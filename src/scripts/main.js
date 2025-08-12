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
  if (!data || typeof data !== 'object' || Object.keys(data).length === 0) {
    return;
  }

  const ul = document.createElement('ul');

  element.append(ul);

  for (const key in data) {
    const li = document.createElement('li');

    if (Object.keys(data[key]).length > 0) {
      // case 1 Object is nested
      li.textContent = key;
      ul.append(li);
      createTree(li, data[key]);
    } else {
      // case 2 Object is not nested
      li.textContent = key;
      ul.append(li);
    }
  }
}

createTree(tree, food);
