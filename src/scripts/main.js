'use strict';

const food = {
  'Drink': {
    'Wine': {},
    'Schnaps': {},
  },

  'Fruit': {
    'Red': {
      'Cherry': {},
      'Strawberry': {},
    },
    'Yellow': {
      'Banana': {},
      'Pineapple': {},
    },

  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  for (const DrinkFruit in data) {
    const ulDrinkFruit = document.createElement('ul');
    const liDrinkFruit = document.createElement('li');

    element.append(ulDrinkFruit);
    ulDrinkFruit.append(liDrinkFruit);
    liDrinkFruit.textContent = DrinkFruit;

    for (const sort in data[DrinkFruit]) {
      const ulSort = document.createElement('ul');
      const liSort = document.createElement('li');

      liDrinkFruit.append(ulSort);
      ulSort.append(liSort);
      liSort.textContent = sort;

      for (const fruit in data[DrinkFruit][sort]) {
        const ulFruit = document.createElement('ul');
        const liFruit = document.createElement('li');

        ulSort.append(ulFruit);
        ulFruit.append(liFruit);
        liFruit.textContent = fruit;
      }
    }
  }
}

// не понял как это сделать через рекурсию.
// Если можно кусочек кода для этой задачи с примером рекурсии.
// Потому что тут легко запутаться.

createTree(tree, food);
