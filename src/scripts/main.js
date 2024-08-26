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

  Object.keys(data).forEach((val) => {
    const item = document.createElement('li');

    if (Object.keys(data[val]).length === 0) {
      item.textContent = val;
    } else {
      item.textContent = val;
      createTree(item, data[val]);
    }
    list.append(item);
  });

  element.append(list);
}

createTree(tree, food);
