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
  const ar = Object.keys(data);
  const list = document.createElement('ul');

  element.append(list);

  ar.forEach((x) => {
    const listElemen = document.createElement('li');

    listElemen.textContent = x;
    list.append(listElemen);

    if (Object.keys(data[`${x}`]).length !== 0) {
      createTree(listElemen, data[`${x}`]);
    }
  });
}

createTree(tree, food);
