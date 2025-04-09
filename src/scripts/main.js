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
  const ul = document.createElement('ul');

  Object.entries(data).forEach(([key, value]) => {
    const li = document.createElement('li');

    li.innerText = key;
    ul.append(li);

    if (Object.keys(value).length > 0) {
      createTree(li, value);
    }
  });

  element.append(ul);
}

createTree(tree, food);
