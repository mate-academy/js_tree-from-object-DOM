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
  for (const key in data) {
    const li = document.createElement('li');

    li.textContent = key;
    element.appendChild(li);

    // Если значение объекта, создаем вложенное дерево
    if (
      typeof data[key] === 'object' &&
      data[key] !== null &&
      Object.keys(data[key]).length > 0
    ) {
      const nestedList = document.createElement('ul'); // создаем вложенный <ul>

      li.appendChild(nestedList); // добавляем вложенный список в текущий <li>
      createTree(nestedList, data[key]);
    }
  }
}

createTree(tree, food);
