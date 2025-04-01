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

  Object.keys(data).forEach((key) => {
    const li = document.createElement('li');

    li.textContent = key;

    const childData = data[key];

    if (Object.keys(childData).length > 0) {
      const childUl = createTree(li, childData);

      li.appendChild(childUl);
    }

    ul.appendChild(li);
  });

  element.appendChild(ul);

  return ul;
}

createTree(tree, food);

// window.addEventListener('DOMContentLoaded', () => {
//   const tree = document.querySelector('#tree');

//   createTree(tree, food);
// });
