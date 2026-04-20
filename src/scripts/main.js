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
  element.innerHTML = '';

  for (const key in data) {
    const li = document.createElement('li');

    li.textContent = key;

    const childData = data[key];

    if (Object.keys(childData).length > 0) {
      const ul = document.createElement('ul');

      createTree(ul, childData); // рекурсивно будуємо підсписок
      li.appendChild(ul);
    }

    element.appendChild(li);
  }
}

createTree(tree, food);
