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
  // Створюємо ul для поточного рівня
  const ul = document.createElement('ul');

  for (const key in data) {
    const li = document.createElement('li');

    li.textContent = key;

    // Перевіряємо, чи є у властивості вкладений об’єкт
    if (typeof data[key] === 'object' && data[key] !== null) {
      // Рекурсивно створюємо підсписок
      createTree(li, data[key]);
    }

    ul.appendChild(li);
  }

  // Додаємо ul до елемента DOM
  element.appendChild(ul);
}

createTree(tree, food);
