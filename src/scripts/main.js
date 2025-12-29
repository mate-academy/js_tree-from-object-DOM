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

// Funkcja rekurencyjna do tworzenia drzewa
function createTree(element, data) {
  if (!element) {
    return;
  }

  const ul = document.createElement('ul');

  for (const key in data) {
    const li = document.createElement('li');

    li.textContent = key;

    // Tworzymy poddrzewo tylko jeśli obiekt ma dzieci
    if (
      data[key] &&
      typeof data[key] === 'object' &&
      Object.keys(data[key]).length > 0
    ) {
      createTree(li, data[key]);
    }

    ul.appendChild(li);
  }

  element.appendChild(ul);
}

// Poczekaj aż DOM będzie gotowy
document.addEventListener('DOMContentLoaded', () => {
  const tree = document.querySelector('#tree'); // deklaracja lokalna

  createTree(tree, food);
});
