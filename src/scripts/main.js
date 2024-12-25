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

const tree = document.querySelector('#tree'); // Отримуємо елемент, до якого буде додано дерево

function createTree(element, data) {
  if (!data || Object.keys(data).length === 0) return; // Перевірка на пустий об'єкт

  const list = document.createElement('ul'); // Створюємо список

  Object.keys(data).forEach((key) => {
    const li = document.createElement('li'); // Створюємо елемент списку
    li.textContent = key; // Додаємо назву ключа як текст
    list.appendChild(li); // Додаємо елемент до списку

    if (Object.keys(data[key]).length > 0) {
      createTree(li, data[key]); // Рекурсія для вкладених об'єктів
    }
  });

  element.appendChild(list); // Додаємо готовий список до переданого елемента
}

createTree(tree, food); // Викликаємо функцію для створення дерева
