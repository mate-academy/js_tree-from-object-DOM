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
    return;
  }

  const list = document.createElement('ul');
  const foodEl = Object.keys(data);

  foodEl.forEach((el) => {
    const li = document.createElement('li');

    li.textContent = el;

    createTree(li, data[el]);
    list.append(li);
  });

  element.append(list);
}

createTree(tree, food);
