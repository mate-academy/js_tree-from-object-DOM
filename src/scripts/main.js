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
  function buildList(obj) {
    const ul = document.createElement('ul');

    for (const key in obj) {
      const li = document.createElement('li');
      li.textContent = key;


      if (Object.keys(obj[key]).length > 0) {
        li.appendChild(buildList(obj[key]));
      }

      ul.appendChild(li);
    }

    return ul;
  }

  element.innerHTML = '';
  element.appendChild(buildList(data));
}

createTree(tree, food);
