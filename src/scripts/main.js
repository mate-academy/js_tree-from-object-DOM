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
  function createListFromObj(obj) {
    const list = document.createElement('ul');

    for (const key in obj) {
      const el = document.createElement('li');

      el.textContent = key;

      if (Object.keys(obj[key]).length > 0) {
        el.appendChild(createListFromObj(obj[key]));
      }

      list.appendChild(el);
    }

    return list;
  }

  element.appendChild(createListFromObj(data));
}

document.addEventListener('DOMContentLoaded', () => {
  createTree(tree, food);
});
