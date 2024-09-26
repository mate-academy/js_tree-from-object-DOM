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
  const list = document.createElement('ul');

  if (Object.keys(data).length > 0) {
    for (const key in data) {
      const item = document.createElement('li');

      item.textContent = key;

      const currentObject = { ...data[key] };

      list.append(item);
      createTree(item, currentObject);
    }
  } else {
    return;
  }

  element.append(list);
}

createTree(tree, food);
