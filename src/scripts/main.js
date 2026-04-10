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
  // перевіряємо, чи є ключі в об'єкті
  if (Object.keys(data).length === 0) {
    return;
  }

  // створюємо список <ul>
  const ul = document.createElement('ul');

  for (const key in data) {
    // сттворюємо пункт <li> і додаємо текст
    const li = document.createElement('li');
    li.textContent = key;

    // викликаємо функцію для вкладених даних через рекурсію
    // Тепер передаємо li як новий "фундамент"
    createTree(li, data[key]);

    // Додаємо li до нашого ul
    ul.append(li);
  }

  // додаємо наш ul до переданого element
  element.append(ul);
}

createTree(tree, food);
