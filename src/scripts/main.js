'use strict';

const food = { // data
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

// const tree = document.querySelector('#tree'); // element
const tree = document.createElement('div');

document.body.append(tree);

function createTree(element, data) {
  const list = document.createElement('ul');

  element.append(list);

  Object.keys(data).forEach((elem) => {
    const item = document.createElement('li');

    item.textContent = elem;
    list.append(item);

    const subdata = data[elem];

    if (typeof subdata === 'object' && Object.keys(subdata).length > 0) {
      createTree(item, subdata);
    }
  });
}

createTree(tree, food);
