'use strict';

// Вхідні дані - об'єкт
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

// Знаходимо батьківський елемент на сторінці
const tree = document.querySelector('#tree');

// --- РЕКУРСИВНА ФУНКЦІЯ ---
function createTree(element, data) {
  // Базовий випадок: якщо даних немає, виходимо
  if (!data || Object.keys(data).length === 0) {
    return;
  }

  // Створюємо <ul> для поточного рівня
  const ul = document.createElement('ul');

  // Додаємо <ul> до батька
  element.appendChild(ul);

  // Перебираємо ключі
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      // Створюємо <li> для ключа
      const li = document.createElement('li');

      li.textContent = key;
      // Додаємо <li> до <ul>
      ul.appendChild(li);

      // Отримуємо вкладені дані
      const nestedData = data[key];

      // Перевіряємо, чи потрібно йти глибше
      if (
        typeof nestedData === 'object' &&
        nestedData !== null &&
        Object.keys(nestedData).length > 0
      ) {
        // Рекурсивний виклик для вкладених даних, батько - поточний <li>
        createTree(li, nestedData);
      }
    }
  }
}

// --- ПЕРШИЙ ВИКЛИК ФУНКЦІЇ ---
// Перевіряємо, чи знайдено батьківський елемент
if (tree) {
  // Запускаємо процес створення дерева
  createTree(tree, food);
} else {
}
