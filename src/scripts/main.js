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

const div = document.createElement('div');

div.setAttribute('id', 'tree');
document.body.prepend(div);

const tree = document.querySelector('#tree');

function createTree(element, data) {
  const list = document.createElement('ul');

  element.append(list);

  for (const type in data) {
    const item = document.createElement('li');

    item.textContent = type;
    list.append(item);

    if (Object.keys(data[type]).length > 0) {
      createTree(item, data[type]);
    }
  }
}

createTree(tree, food);
