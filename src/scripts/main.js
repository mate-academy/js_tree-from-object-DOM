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

  for (const key in data) {
    const li = document.createElement('li');
    const span = document.createElement('span');

    span.textContent = key;

    li.appendChild(span);

    if (Object.keys(data[key]).length > 0) {
      const childUl = document.createElement('ul');

      for (const childKey in data[key]) {
        const childLi = document.createElement('li');
        const childSpan = document.createElement('span');

        childSpan.textContent = childKey;

        childLi.appendChild(childSpan);

        if (Object.keys(data[key][childKey]).length > 0) {
          createTree(childLi, data[key][childKey]);
        }

        childUl.appendChild(childLi);
      }

      li.appendChild(childUl);
    }

    ul.appendChild(li);
  }

  element.appendChild(ul);
}

createTree(tree, food);
