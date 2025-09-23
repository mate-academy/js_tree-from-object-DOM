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
  const ul = document.createElement('ul'); // створюємо список

  for (let key in data) { // проходимо всі ключі об’єкта
    const li = document.createElement('li'); // створюємо елемент списку
    li.textContent = key; // вставляємо назву ключа

    // якщо значення ключа — об’єкт і він не пустий, створюємо вкладене дерево
    if (typeof data[key] === 'object' && Object.keys(data[key]).length > 0) {
      createTree(li, data[key]); // рекурсивно додаємо підсписок
    }

    ul.append(li); // додаємо пункт у список
  }

  element.append(ul); // додаємо список у переданий контейнер
}

createTree(tree, food);
