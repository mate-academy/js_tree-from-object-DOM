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
  if (Object.keys(data).length ===0 ) {
    return;
  }

  let list = document.createElement('ul');
  for (let key in data) {
    let elem = document.createElement('li');
    elem.textContent = key;
    if (Object.keys(data[key]).length > 0) {
      createTree(elem, data[key]);
    }
    list.append(elem);
  }
  element.append(list);
}

createTree(tree, food);
