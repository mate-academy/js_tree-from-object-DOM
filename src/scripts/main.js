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
  function createList(item) {
    const list = document.createElement('ul');

    for (const key in item) {
      const li = document.createElement('li');

      li.textContent = key;

      if (Object.keys(item[key]).length > 0) {
        li.append(createList(item[key]));
      }

      list.append(li);
    }

    return list;
  }

  element.append(createList(data));
}

createTree(tree, food);
