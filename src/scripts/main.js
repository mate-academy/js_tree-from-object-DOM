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

// const tree = document.querySelector('#tree');
const firstLevel = document.createElement('ul');

document.body.append(firstLevel);

function createTree(element, data) {
  for (const key in data) {
    const secondLevel = document.createElement('li');

    secondLevel.textContent = key;
    element.append(secondLevel);

    if (typeof data[key] === 'object' && data[key] !== null) {
      const newUl = document.createElement('ul');

      secondLevel.append(newUl);
      createTree(newUl, data[key]);
    }
  }
}

createTree(firstLevel, food);
