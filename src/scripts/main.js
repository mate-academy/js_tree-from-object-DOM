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
  Object.entries(data).forEach(([key, value]) => {
    const li = document.createElement('li');

    li.innerText = key;
    element.append(li);

    if (Object.values(value).length) {
      const ul = document.createElement('ul');

      li.append(ul);
      createTree(ul, value);
    }
  });
}

createTree(tree, food);
