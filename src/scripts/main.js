/* eslint-disable no-console */
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

// const tree = document.querySelector('#tree');

// function createTree(element, data) {
//   if (!Object.keys(data).length) {
//     return;
//   }

//   const ul = document.createElement('ul');

//   for (const key in data) {
//     if (data.hasOwnProperty(key)) {
//       const li = document.createElement('li');

//       li.textContent = data;

//       createTree(li, data[key]);

//       ul.appendChild(li);
//     }
//   }

//   element.appendChild(ul);
// }

// createTree(tree, food);

document.addEventListener('DOMContentLoaded', () => {
  const tree = document.querySelector('#tree');

  if (tree) {
    createTree(tree, food);

    // eslint-disable-next-line no-sequences
    console.log('Дерево успешно создано:', tree.innerHTML);
  } else {
    console.log('Элемент #tree не найден в DOM.');
  }
});

function createTree(element, data) {
  if (!Object.keys(data).length) {
    return;
  }

  const ul = document.createElement('ul');

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const li = document.createElement('li');

      li.textContent = key;

      createTree(li, data[key]);

      ul.appendChild(li);
    }
  }
  element.appendChild(ul);
}
