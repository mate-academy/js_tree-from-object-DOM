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
  // WRITE YOUR CODE HERE
  if (!element || typeof data !== 'object' || data === null) {
    return;
  }

  //  Якщо об’єкт порожній — нічого не створюємо

  const keys = Object.keys(data);

  if (!keys.length) {
    return;
  }

  // Створюємо список
  const ul = document.createElement('ul');

  // Проходимось по ключах
  keys.forEach((key) => {
    const li = document.createElement('li');

    li.textContent = key;

    const child = data[key];

    // якщо є вкладений об’єкт — рекурсивно створюємо піддерево

    if (
      typeof child === 'object' &&
      child !== null &&
      Object.keys(child).length
    ) {
      createTree(li, child);
    }

    ul.appendChild(li);
  });

  // Додаємо готовий <ul> до елемента
  element.appendChild(ul);
}

// Безпечний виклик — лише коли DOM завантажений і елемент знайдено
if (typeof document !== 'undefined' && tree) {
  document.addEventListener('DOMContentLoaded', () => {
    createTree(tree, food);
  });
}

// (опціонально) експорт для тестів — не впливає на роботу у браузері
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { createTree };
}
