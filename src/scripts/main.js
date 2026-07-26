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

  document.body.appendChild(ul);

  for (const key1 in data) {
    const li = document.createElement('li');

    li.textContent = key1;

    ul.appendChild(li);

    if (typeof data[key1] === 'object') {
      for (const key2 in data[key1]) {
        if (key2 !== undefined) {
          const li1 = document.createElement('li');

          li1.textContent = key2;

          li.appendChild(li1);

          for (const key3 in data[key1][key2]) {
            if (typeof key3 === 'string') {
              const li2 = document.createElement('li');

              li2.textContent = key3;

              li1.appendChild(li2);
            }
          }
        }
      }
    }
  }
}

createTree(tree, food);
