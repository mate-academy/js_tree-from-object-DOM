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

document.body.id = 'tree';

const tree = document.querySelector('#tree');

function createTree(element, data) {
  function createList(obj) {
    const ul = document.createElement('ul');

    for (const key in obj) {
      const li = document.createElement('li');

      li.textContent = key;
      ul.append(li);

      if (Object.keys(obj[key]).length > 0) {
        li.append(createList(obj[key]));
      }
    }

    return ul;
  }

  element.append(createList(data));
}

createTree(tree, food);
