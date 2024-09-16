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
    const createUl = document.createElement('ul');

    for (const key in obj) {
      const createLi = document.createElement('li');

      createLi.textContent = key;
      createUl.append(createLi);

      if (Object.keys(obj[key]).length > 0) {
        createLi.append(createList(obj[key]));
      }
    }

    return createUl;
  }

  element.append(createList(data));
}
createTree(tree, food);
