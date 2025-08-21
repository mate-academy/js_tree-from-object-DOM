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

const treeContainer = document.getElementById('tree-container');

function createTree(element, data) {
  // Функція, що рекурсивно створює елементи списку
  function createList(parentEl, obj) {
    // Якщо об'єкт порожній, повертаємося, щоб не створювати пусті <ul>
    if (Object.keys(obj).length === 0) {
      return;
    }

    const ul = document.createElement('ul');

    parentEl.appendChild(ul);

    for (const key in obj) {
      // Переконайтеся, що ми обробляємо лише власні властивості об'єкта
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const li = document.createElement('li');

        li.textContent = key;
        ul.appendChild(li);

        // Якщо значення є об'єктом, викликаємо рекурсію
        if (typeof obj[key] === 'object' && obj[key] !== null) {
          createList(li, obj[key]);
        }
      }
    }
  }

  createList(element, data);
}

// Правильний виклик функції, який вирішить обидві помилки
// Він повинен бути поза функцією createTree
createTree(treeContainer, food);
