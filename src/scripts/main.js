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
  // 1. Додаємо перевірку: якщо елемента або даних немає, припиняємо роботу
  if (!element || !data) {
    return;
  }

  const keys = Object.keys(data);

  // 2. Якщо об'єкт порожній, список створювати не потрібно
  if (keys.length === 0) {
    return;
  }

  const ul = document.createElement('ul');

  keys.forEach((key) => {
    const li = document.createElement('li');

    li.textContent = key;

    // Рекурсивний виклик для вкладених об'єктів
    createTree(li, data[key]);
    ul.append(li);
  });

  element.append(ul);
}

// Викликаємо функцію
createTree(tree, food);
